import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import useRoute from '@/Hooks/useRoute';

interface ResetPasswordProps {
    token: string;
    email: string;
}

type InputTargetProps = { name: any; value: any };

export default function ResetPassword(args: ResetPasswordProps) {
    const route = useRoute();
    const { token, email } = args;
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onChange = (event: { target: InputTargetProps }) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        post('/reset-password');
    };

    return (
        <>
            <Head title='Reset Password' />

            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput='email' value='Email' />

                    <TextInput
                        type='email'
                        name='email'
                        value={data.email}
                        autoComplete='username'
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
                        autoComplete='new-password'
                        autoFocus
                        onChange={onChange}
                    />

                    <InputError message={errors.password} className='mt-2' />
                </div>

                <div className='mt-4'>
                    <InputLabel forInput='password_confirmation' value='Confirm Password' />

                    <TextInput
                        type='password'
                        name='password_confirmation'
                        value={data.password_confirmation}
                        autoComplete='new-password'
                        onChange={onChange}
                    />

                    <InputError message={errors.password_confirmation} className='mt-2' />
                </div>

                <div className='mt-4 flex items-center justify-end'>
                    <PrimaryButton type='submit' className='ml-4' disabled={processing}>
                        Reset Password
                    </PrimaryButton>
                </div>
            </form>
        </>
    );
}

ResetPassword.layout = (page: any) => <GuestLayout children={page} />;
