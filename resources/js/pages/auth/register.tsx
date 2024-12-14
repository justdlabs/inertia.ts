import { Head, useForm } from '@inertiajs/react';
import { GuestLayout } from 'layouts';
import React, { useEffect } from 'react';
import { Button, buttonStyles, Checkbox, Form, Link, TextField } from 'ui';

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false
  });

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    post('/register');
  };
  console.log(import.meta.env.VITE_HAS_TERMS_AND_PRIVACY_POLICY_FEATURE);
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

        {import.meta.env.VITE_HAS_TERMS_AND_PRIVACY_POLICY_FEATURE && (
          <div className="flex items-center gap-x-1">
            <Checkbox name="terms" id="terms" onChange={(e: any) => setData('terms', e)} isRequired>
              I agree to the{' '}
            </Checkbox>
            <Link target="_blank" href={route('terms.show')} intent="primary">
              terms of service
            </Link>{' '}
            and{' '}
            <Link target="_blank" href={route('privacy.show')} intent="primary">
              privacy policy
            </Link>
          </div>
        )}

        <div className="flex items-center justify-between">
          <Link href="/login" className={buttonStyles({ appearance: 'outline' })}>
            Already registered?
          </Link>

          <Button type="submit" isDisabled={processing}>
            Register
          </Button>
        </div>
      </Form>
    </>
  );
}

Register.layout = (page: React.ReactNode) => {
  return <GuestLayout header="Register" description="Register for your new account." children={page} />;
};
