import React, { useEffect } from 'react';
import { Checkbox } from '@/components/checkbox';
import { GuestLayout } from '@/layouts/guest-layout';
import { InputError } from '@/components/input-error';
import { Label } from '@/components/label';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Head, Link, useForm } from '@inertiajs/react';

interface LoginProps {
    status: string;
    canResetPassword: boolean;
}

export default function Login(args: LoginProps) {
    const { status, canResetPassword } = args;
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onChange = (event: { target: { name: any; value: any } }) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <Head title='Log in' />

            {status && <div className='mb-4 text-sm font-medium text-green-600 dark:text-green-400'>{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <Label htmlFor='email'>Email</Label>

                    <Input
                        type='text'
                        name='email'
                        value={data.email}
                        className='mt-1'
                        autoComplete='username'
                        autoFocus
                        onChange={onChange}
                    />

                    <InputError message={errors.email} className='mt-2' />
                </div>

                <div className='mt-4'>
                    <Label htmlFor='password'>Password</Label>

                    <Input
                        type='password'
                        name='password'
                        value={data.password}
                        className='mt-1'
                        autoComplete='current-password'
                        onChange={onChange}
                    />

                    <InputError message={errors.password} className='mt-2' />
                </div>

                <div className='mt-4 flex items-center justify-between'>
                    <label className='flex items-center'>
                        <Checkbox name='remember' onCheckedChange={(e) => e} />

                        <span className='ml-2 text-sm text-muted-foreground'>Remember me</span>
                    </label>
                    {canResetPassword && (
                        <Link
                            href='/forgot-password'
                            className='text-sm text-foreground hover:underline'>
                            Forgot your password?
                        </Link>
                    )}
                </div>

                <div className='mt-4 flex items-center justify-end'>
                    <Link
                        href={route('register')}
                        className='text-sm text-foreground hover:underline'>
                        Don't have an account?
                    </Link>

                    <Button className='ml-4' disabled={processing} type='submit'>
                        Log in
                    </Button>
                </div>
            </form>
        </>
    );
}

Login.layout = (page: React.ReactNode) => {
    return (
        <GuestLayout
            header='Login'
            description="Log in to your account."
            children={page}
        />
    );
};
