import { FlashMessage } from "@/components/flash-message"
import { Logo } from "@/components/logo"
import { Card } from "@/components/ui/card"
import type { PropsWithChildren, ReactNode } from "react"
import { Link } from "ui"

interface GuestLayoutProps {
  header?: string | null
  description?: string | ReactNode | null
}

export default function GuestLayout({
  description = null,
  header = null,
  children,
}: PropsWithChildren<GuestLayoutProps>) {
  return (
    <div className="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
      <FlashMessage />
      <Link href={route("home")}>
        <Logo className="mx-auto size-8" />
      </Link>

      <div className="mt-10 w-full max-w-lg">
        <Card className="rounded-none border-r-transparent border-l-transparent shadow-none sm:rounded-lg sm:border-r-border sm:border-l-border sm:shadow-sm lg:rounded-xl ">
          <Card.Header>
            <Card.Title>{header}</Card.Title>
            <Card.Description>{description}</Card.Description>
          </Card.Header>
          <Card.Content>{children}</Card.Content>
        </Card>
      </div>
    </div>
  )
}
