import { IconBrandJustd } from '@irsyadadl/paranoid'
import { SVGProps } from 'react'
import { cn } from 'ui'

export function Logo({ className, ...props }: SVGProps<SVGSVGElement>) {
    return <IconBrandJustd {...props} className={cn('size-6', className)} />
}
