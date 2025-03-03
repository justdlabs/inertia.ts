import { useForm, usePage } from "@inertiajs/react"
import { Button, Card, Form, Link, TextField } from "ui"
import type { AuthenticatedUserProps } from "@/types"

interface Props {
  mustVerifyEmail: boolean
  status?: string
  className?: string
}

export function UpdateProfileInformationForm({ mustVerifyEmail, status, className }: Props) {
  const { user } = usePage<{ user: AuthenticatedUserProps }>().props
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name ?? "",
    email: user.email ?? "",
  })

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    patch(route("profile.update"), {
      preserveScroll: true,
    })
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title>Profile Information</Card.Title>
        <Card.Description>
          Update your account's profile information and email address.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <Form validationErrors={errors} onSubmit={submit} className="space-y-6">
          <TextField
            id="name"
            label="Name"
            type="text"
            value={data.name}
            onChange={(v) => setData("name", v)}
            isRequired
            errorMessage={errors.name}
            autoFocus
            autoComplete="name"
          />
          <TextField
            id="email"
            type="email"
            label="Email"
            value={data.email}
            onChange={(v) => setData("email", v)}
            isRequired
            errorMessage={errors.email}
            autoComplete="email"
          />

          {mustVerifyEmail && user.email_verified_at === null && (
            <div>
              <p className="mt-2 text-sm">
                Your email address is unverified.
                <Link
                  href={route("verification.send")}
                  intent="secondary"
                  routerOptions={{
                    method: "post",
                  }}
                >
                  Click here to re-send the verification email.
                </Link>
              </p>

              {status === "verification-link-sent" && (
                <div className="mt-2 font-medium text-green-600 text-sm">
                  A new verification link has been sent to your email address.
                </div>
              )}
            </div>
          )}

          <div className="flex items-center gap-4">
            <Button type="submit" isDisabled={processing}>
              Save
            </Button>
            {recentlySuccessful && <p className="text-muted-fg text-sm">Saved.</p>}
          </div>
        </Form>
      </Card.Content>
    </Card>
  )
}
