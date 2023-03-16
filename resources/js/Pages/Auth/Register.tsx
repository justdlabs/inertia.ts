import React, { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Checkbox from '@/Components/Checkbox';
import useTypedPage from '@/Hooks/useTypedPage';

export default function Register() {
    const { hasTermsAndPrivacyPolicyFeature } = useTypedPage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        terms: false,
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onChange = (event: { target: { name: any; value: any } }) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        post('/register');
    };

    return (
        <>
            <Head title='Register' />

            <form onSubmit={submit}>
                <>
                    <div>
                        <InputLabel forInput='name' value='Name' />

                        <TextInput
                            type='text'
                            name='name'
                            value={data.name}
                            autoComplete='name'
                            autoFocus
                            onChange={onChange}
                            required
                        />

                        <InputError message={errors.name} className='mt-2' />
                    </div>

                    <div className='mt-4'>
                        <InputLabel forInput='email' value='Email' />

                        <TextInput
                            type='email'
                            name='email'
                            value={data.email}
                            autoComplete='username'
                            onChange={onChange}
                            required
                        />

                        <InputError message={errors.email} className='mt-2' />
                    </div>

                    <div className='mt-4'>
                        <InputLabel forInput='password' value='Password' />

                        <TextInput
                            type='password'
                            name='password'
                            value={data.password}
                            autoComplete='new-password'
                            onChange={onChange}
                            required
                        />

                        <InputError message={errors.password} className='mt-2' />
                    </div>

                    <div className='mt-4'>
                        <InputLabel forInput='password_confirmation' value='Confirm Password' />

                        <TextInput
                            type='password'
                            name='password_confirmation'
                            value={data.password_confirmation}
                            onChange={onChange}
                            required
                        />

                        <InputError message={errors.password_confirmation} className='mt-2' />
                    </div>

                    {hasTermsAndPrivacyPolicyFeature && (
                        <div className='mt-4'>
                            <InputLabel forInput='terms'>
                                <div className='flex items-center'>
                                    <Checkbox
                                        name='terms'
                                        id='terms'
                                        checked={data.terms}
                                        onChange={(e: { currentTarget: { checked: boolean } }) =>
                                            setData('terms', e.currentTarget.checked)
                                        }
                                        required
                                    />

                                    <div className='ml-2'>
                                        I agree to the{' '}
                                        <a
                                            target='_blank'
                                            href={route('terms.show')}
                                            className='text-sm text-gray-600 underline hover:text-gray-900'>
                                            Terms of Service
                                        </a>{' '}
                                        and{' '}
                                        <a
                                            target='_blank'
                                            href={route('privacy.show')}
                                            className='text-sm text-gray-600 underline hover:text-gray-900'>
                                            Privacy Policy
                                        </a>
                                    </div>
                                </div>
                                <InputError className='mt-2' message={errors.terms} />
                            </InputLabel>
                        </div>
                    )}

                    <div className='mt-4 flex items-center justify-end'>
                        <Link href='/login' className='text-sm text-slate-600 underline hover:text-slate-900'>
                            Already registered?
                        </Link>

                        <PrimaryButton type='submit' className='ml-4' disabled={processing}>
                            Register
                        </PrimaryButton>
                    </div>
                </>
            </form>
        </>
    );
}

Register.layout = (page: React.ReactNode) => {
    return (
        <GuestLayout
            header='Register'
            description={
                <>
                    Or{' '}
                    <Link href={route('login')} className='font-medium text-primary-600 hover:text-primary-500'>
                        login
                    </Link>{' '}
                    if you already have an account
                </>
            }
            children={page}
        />
    );
};
