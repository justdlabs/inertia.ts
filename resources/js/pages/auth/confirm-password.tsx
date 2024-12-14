import { Head, useForm } from '@inertiajs/react';
import { GuestLayout } from 'layouts';
import { useEffect } from 'react';
import { Button, Form, TextField } from 'ui';

export default function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: ''
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    post(route('password.confirm'));
  };

  return (
    <>
      <Head title="Confirm Password" />

      <div className="mb-4 text-sm text-muted-fg">
        This is a secure area of the application. Please confirm your password before continuing.
      </div>

      <Form validationErrors={errors} onSubmit={submit}>
        <TextField
          id="password"
          label="Password"
          type="password"
          name="password"
          value={data.password}
          className="mt-1 block w-full"
          autoFocus
          onChange={(v) => setData('password', v)}
        />

        <div className="mt-4 flex items-center justify-end">
          <Button isDisabled={processing}>Confirm</Button>
        </div>
      </Form>
    </>
  );
}

ConfirmPassword.layout = (page: any) => <GuestLayout children={page} />;
