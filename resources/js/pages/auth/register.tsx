import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Form } from '@/components/ui/form'
import { Link } from '@/components/ui/link'
import { TextField } from '@/components/ui/text-field'
import { GuestLayout } from '@/layouts/guest-layout'
import { Head, useForm, usePage } from '@inertiajs/react'
import React, { useEffect } from 'react'

export default function Register() {
    const { hasTermsAndPrivacyPolicyFeature } = usePage<{ hasTermsAndPrivacyPolicyFeature: boolean }>().props
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        terms: false
    })

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation')
        }
    }, [])

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault()

        post('/register')
    }

    return (
        <>
            <Head title="Register" />

            <Form onSubmit={submit} validationErrors={errors} className="space-y-6">
                <TextField
                    type="text"
                    name="name"
                    label="Name"
                    value={data.name}
                    className="mt-1"
                    autoComplete="name"
                    autoFocus
                    onChange={(v) => setData('name', v)}
                    errorMessage={errors.name}
                    isRequired
                />
                <TextField
                    type="email"
                    name="email"
                    label="Email"
                    value={data.email}
                    className="mt-1"
                    autoComplete="username"
                    onChange={(v) => setData('email', v)}
                    errorMessage={errors.email}
                    isRequired
                />
                <TextField
                    type="password"
                    name="password"
                    label="Password"
                    value={data.password}
                    autoComplete="current-password"
                    onChange={(v) => setData('password', v)}
                    errorMessage={errors.password}
                    isRequired
                />

                <TextField
                    type="password"
                    label="Confirm Password"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    className="mt-1"
                    onChange={(v) => setData('password_confirmation', v)}
                    errorMessage={errors.password_confirmation}
                    isRequired
                />

                {hasTermsAndPrivacyPolicyFeature && (
                    <Checkbox name="terms" id="terms" onChange={(e: any) => setData('terms', e)} isRequired>
                        I agree to the{' '}
                        <a
                            target="_blank"
                            href={route('terms.show')}
                            className="text-sm text-muted-fg hover:text-primary"
                        >
                            terms of service
                        </a>{' '}
                        and{' '}
                        <a
                            target="_blank"
                            href={route('privacy.show')}
                            className="text-sm text-muted-fg hover:text-primary"
                        >
                            privacy policy
                        </a>
                    </Checkbox>
                )}

                <div className="flex items-center justify-between">
                    <Link href="/login" intent="secondary">
                        Already registered?
                    </Link>

                    <Button type="submit" isDisabled={processing}>
                        Register
                    </Button>
                </div>
            </Form>
        </>
    )
}

Register.layout = (page: React.ReactNode) => {
    return <GuestLayout header="Register" description="Register for your new account." children={page} />
}
