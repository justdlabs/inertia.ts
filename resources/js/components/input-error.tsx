import type { HTMLAttributes } from "react"
import { Description } from "ui"
import { twMerge } from "tailwind-merge"

export function InputError({
  message,
  className = "",
  ...props
}: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
  return message ? (
    <Description {...props} className={twMerge("block text-danger text-sm")}>
      {message}
    </Description>
  ) : null
}
