import { cn } from "@/utils/classes"
import type { HTMLAttributes } from "react"
import { Description } from "ui"

export function InputError({
  message,
  className = "",
  ...props
}: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
  return message ? (
    <Description {...props} className={cn("block text-danger text-sm")}>
      {message}
    </Description>
  ) : null
}
