import GuestLayout from "@/layouts/guest-layout"
import { Head, useForm } from "@inertiajs/react"
import type React from "react"
import { useEffect } from "react"
import { Button, Form, Link, TextField } from "ui"

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: false,
  })

  useEffect(() => {
    return () => {
      reset("password", "password_confirmation")
    }
  }, [])

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    post("/register")
  }
  return (
    <>
      <Head title="Register" />

      <Form onSubmit={submit} validationErrors={errors} className="flex flex-col gap-y-4">
        <TextField
          type="text"
          name="name"
          label="Name"
          value={data.name}
          autoComplete="name"
          autoFocus
          onChange={(v) => setData("name", v)}
          errorMessage={errors.name}
          isRequired
        />
        <TextField
          type="email"
          name="email"
          label="Email"
          value={data.email}
          autoComplete="username"
          onChange={(v) => setData("email", v)}
          errorMessage={errors.email}
          isRequired
        />
        <div className="grid grid-cols-2 gap-4">
          <TextField
            type="password"
            name="password"
            label="Password"
            value={data.password}
            autoComplete="current-password"
            onChange={(v) => setData("password", v)}
            errorMessage={errors.password}
            isRequired
          />

          <TextField
            type="password"
            label="Confirm Password"
            name="password_confirmation"
            value={data.password_confirmation}
            onChange={(v) => setData("password_confirmation", v)}
            errorMessage={errors.password_confirmation}
            isRequired
          />
        </div>
        <Button type="submit" className="w-full" isDisabled={processing}>
          Register
        </Button>
        <div className="text-center">
          <Link href="/login" intent="secondary" className="sm:text-sm">
            Already registered?
          </Link>
        </div>
      </Form>
    </>
  )
}

Register.layout = (page: React.ReactNode) => {
  return (
    <GuestLayout header="Register" description="Register for your new account." children={page} />
  )
}
