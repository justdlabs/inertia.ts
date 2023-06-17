import GuestLayout from '@/layouts/guest-layout';
import InputErrorMessage from '@/components/input-error-message';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Head, useForm } from '@inertiajs/react';

interface ForgotPasswordProps {
    status: string;
}

export default function ForgotPassword({ status }: ForgotPasswordProps) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onChange = (event: { target: { name: any; value: any } }) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        post('/forgot-password');
    };

    return (
        <>
            <Head title='Forgot Password' />

            <div className='mb-4 text-sm leading-normal text-slate-500'>
                Forgot your password? No problem. Just let us know your email address and we will email you a password
                reset link that will allow you to choose a new one.
            </div>

            {status && <div className='mb-4 text-sm font-medium text-green-600'>{status}</div>}

            <form onSubmit={submit}>
                <Input type='text' name='email' value={data.email} autoFocus onChange={onChange} />

                <InputErrorMessage message={errors.email} className='mt-2' />

                <div className='mt-4 flex items-center justify-end'>
                    <Button type='submit' className='ml-4' disabled={processing}>
                        Email Password Reset Link
                    </Button>
                </div>
            </form>
        </>
    );
}

ForgotPassword.layout = (page: any) => <GuestLayout children={page} />;
