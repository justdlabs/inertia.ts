import React, { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

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

        post('/login');
    };

    return (
        <GuestLayout>
            <Head title='Log in' />

            {status && <div className='mb-4 text-sm font-medium text-green-600'>{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput='email' value='Email' />

                    <TextInput
                        type='text'
                        name='email'
                        value={data.email}
                        autoComplete='username'
                        isFocused={true}
                        onChange={onChange}
                    />

                    <InputError message={errors.email} className='mt-2' />
                </div>

                <div className='mt-4'>
                    <InputLabel forInput='password' value='Password' />

                    <TextInput
                        type='password'
                        name='password'
                        value={data.password}
                        autoComplete='current-password'
                        onChange={onChange}
                    />

                    <InputError message={errors.password} className='mt-2' />
                </div>

                <div className='mt-4 block'>
                    <label className='flex items-center'>
                        <Checkbox
                            name='remember'
                            value={data.remember}
                            onChange={(e: { target: { checked: any } }) => e.target.checked}
                        />

                        <span className='ml-2 text-sm text-gray-600'>Remember me</span>
                    </label>
                </div>

                <div className='mt-4 flex items-center justify-end'>
                    {canResetPassword && (
                        <Link href='/forgot-password' className='text-sm text-gray-600 underline hover:text-gray-900'>
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className='ml-4' processing={processing} type='submit'>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
