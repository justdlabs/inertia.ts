import { Head, useForm } from '@inertiajs/react';
import { GuestLayout } from 'layouts';
import { useEffect } from 'react';
import { Button, Form, TextField } from 'ui';

interface ResetPasswordProps {
  token: string;
  email: string;
}

type InputTargetProps = { name: any; value: any };

export default function ResetPassword(args: ResetPasswordProps) {
  const { token, email } = args;
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
    password: '',
    password_confirmation: ''
  });

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    post('/reset-password');
  };

  return (
    <>
      <Head title="Reset Password" />

      <Form className="space-y-6" validationErrors={errors} onSubmit={submit}>
        <TextField
          label="Email"
          isRequired
          errorMessage={errors.email}
          type="email"
          name="email"
          value={data.email}
          autoComplete="username"
          onChange={(v) => setData('email', v)}
        />

        <TextField
          label="Password"
          isRequired
          errorMessage={errors.password}
          type="password"
          name="password"
          value={data.password}
          autoComplete="new-password"
          autoFocus
          onChange={(v) => setData('password', v)}
        />

        <TextField
          label="Confirm Password"
          type="password"
          name="password_confirmation"
          value={data.password_confirmation}
          autoComplete="new-password"
          onChange={(v) => setData('password_confirmation', v)}
          errorMessage={errors.password_confirmation}
          isRequired
        />

        <div className="mt-4 flex items-center justify-end">
          <Button type="submit" className="ml-4" isDisabled={processing}>
            Reset Password
          </Button>
        </div>
      </Form>
    </>
  );
}

ResetPassword.layout = (page: any) => <GuestLayout children={page} />;
