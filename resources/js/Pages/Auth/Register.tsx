import React, { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
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
        <GuestLayout>
            <Head title='Register' />

            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput='name' value='Name' />

                    <TextInput
                        type='text'
                        name='name'
                        value={data.name}
                        autoComplete='name'
                        isFocused={true}
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

                <div className='mt-4 flex items-center justify-end'>
                    <Link href='/login' className='text-sm text-gray-600 underline hover:text-gray-900'>
                        Already registered?
                    </Link>

                    <PrimaryButton type='submit' className='ml-4' processing={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
