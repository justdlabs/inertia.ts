import { cn } from "@/utils/classes"
import { IconBrandJustd } from "justd-icons"
import type React from "react"

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return <IconBrandJustd className={cn("size-5", className)} {...props} />
}
