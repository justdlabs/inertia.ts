
import * as React from "react"
import { Container } from "ui"
import { twMerge } from "tailwind-merge"

const Header = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={twMerge("mb-12 border-b bg-bg py-6 sm:py-12", className)} {...props}>
      <Container>
        <h1 className="font-semibold text-xl tracking-tight sm:text-2xl">{props.title}</h1>
      </Container>
    </div>
  ),
)
Header.displayName = "Header"

export { Header }
