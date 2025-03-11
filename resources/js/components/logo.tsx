import { IconBrandJustd } from "justd-icons"
import type React from "react"
import { twMerge } from "tailwind-merge"

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return <IconBrandJustd className={twMerge("size-5", className)} {...props} />
}
