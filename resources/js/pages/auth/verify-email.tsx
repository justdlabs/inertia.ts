import { GuestLayout } from '@/layouts/guest-layout';
import { Head, useForm } from '@inertiajs/react';
import { Button, Form, Link } from 'ui';

export default function VerifyEmail({ status }: { status?: any }) {
  const { post, processing } = useForm();

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    post('/email/verification-notification');
  };
  return (
    <>
      <Head title="Email Verification" />
      {status === 'verification-link-sent' && (
        <div className="mb-4 text-sm font-medium text-green-600">
          A new verification link has been sent to the email address you provided during registration.
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <Form onSubmit={submit}>
          <Button isDisabled={processing} type="submit">
            Resend Verification Email
          </Button>
        </Form>

        <Link
          href={'/logout'}
          routerOptions={{
            method: 'post'
          }}
          intent="secondary"
        >
          Log Out
        </Link>
      </div>
    </>
  );
}

VerifyEmail.layout = (page: any) => (
  <GuestLayout
    header="Verify email"
    description="
                Thanks for signing up! Before getting started, could you verify your email address by clicking on the
                link we just emailed to you? If you didn't receive the email, we will gladly send you another."
    children={page}
  />
);
