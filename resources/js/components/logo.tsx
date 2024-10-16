import { IconBrandLaravel } from 'justd-icons';
import React from 'react';
import { cn } from 'ui';

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return <IconBrandLaravel className={cn('size-6', className)} {...props} />;
}
