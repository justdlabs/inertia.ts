import { useForm } from '@inertiajs/react';
import { useRef } from 'react';
import { toast } from 'sonner';
import { Button, Card, Form, TextField } from 'ui';

export function UpdatePasswordForm() {
  const passwordInput = useRef<HTMLInputElement>(null);
  const currentPasswordInput = useRef<HTMLInputElement>(null);
  const { data, setData, put, errors, reset, processing, recentlySuccessful } = useForm({
    current_password: '',
    password: '',
    password_confirmation: ''
  });

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    put(route('password.update'), {
      preserveScroll: true,
      onSuccess: () => {
        toast.success('Your profile information has been updated.');
        reset();
      },
      onError: () => {
        if (errors.password) {
          reset('password', 'password_confirmation');
          passwordInput.current?.focus();
        }

        if (errors.current_password) {
          reset('current_password');
          currentPasswordInput.current?.focus();
        }
      }
    });
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title>Update Password</Card.Title>
        <Card.Description>Ensure your account is using a long, random password to stay secure.</Card.Description>
      </Card.Header>

      <Card.Content>
        <Form validationErrors={errors} onSubmit={submit} className="space-y-6">
          <TextField
            label="Current Password"
            value={data.current_password}
            className="mt-1"
            onChange={(v) => setData('current_password', v)}
            type="password"
            autoComplete="current-password"
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

          <div className="flex items-center gap-4">
            <Button type="submit" isDisabled={processing}>
              Save
            </Button>

            {recentlySuccessful && <p className="text-sm text-muted-fg">Saved.</p>}
          </div>
        </Form>
      </Card.Content>
    </Card>
  );
}
