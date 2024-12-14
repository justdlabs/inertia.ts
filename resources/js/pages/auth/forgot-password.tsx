import { Head, useForm } from '@inertiajs/react';
import { GuestLayout } from 'layouts';
import { Button, Form, TextField } from 'ui';

interface ForgotPasswordProps {
  status: string;
}

export default function ForgotPassword({ status }: ForgotPasswordProps) {
  const { data, setData, post, processing, errors } = useForm({
    email: ''
  });

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    post('/forgot-password');
  };

  return (
    <>
      <Head title="Forgot Password" />
      {status && <div className="mb-4 text-sm font-medium text-success">{status}</div>}

      <Form validationErrors={errors} onSubmit={submit}>
        <TextField
          type="text"
          name="email"
          value={data.email}
          isRequired
          errorMessage={errors.email}
          autoFocus
          onChange={(v) => setData('email', v)}
        />

        <div className="mt-4 flex items-center justify-end">
          <Button type="submit" className="ml-4" isDisabled={processing}>
            Email Password Reset Link
          </Button>
        </div>
      </Form>
    </>
  );
}

ForgotPassword.layout = (page: any) => (
  <GuestLayout
    header="Forgot Password"
    description="
                    Forgot your password? No problem. Just let us know your email address and we will email you a password
                    reset link that will allow you to choose a new one."
    children={page}
  />
);
