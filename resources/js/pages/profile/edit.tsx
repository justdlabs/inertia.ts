import { Header } from "@/components/header"
import AppLayout from "@/layouts/app-layout"
import { Head } from "@inertiajs/react"
import { Container } from "ui"
import { DeleteUserForm, UpdatePasswordForm, UpdateProfileInformationForm } from "./partials"

interface Props {
  mustVerifyEmail: boolean
  status?: string
}

const title = "Profile"

export default function Edit({ mustVerifyEmail, status }: Props) {
  return (
    <>
      <Head title={title} />
      <Header title={title} />
      <Container>
        <div className="flex max-w-3xl flex-col gap-y-6">
          <UpdateProfileInformationForm mustVerifyEmail={mustVerifyEmail} status={status} />
          <UpdatePasswordForm />
          <DeleteUserForm />
        </div>
      </Container>
    </>
  )
}

Edit.layout = (page: any) => <AppLayout children={page} />
