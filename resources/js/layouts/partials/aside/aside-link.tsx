import { InertiaLinkProps, Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';

interface Props extends InertiaLinkProps {
    className?: string;
    active?: boolean;
}

export function AsideLink({ className, active, ...props }: Props) {
    return (
        <Link
            className={cn(
                active ? 'bg-accent text-accent-foreground' : 'hover:bg-accent',
                'flex items-center gap-x-2 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 rounded-lg px-3 py-2 text-sm font-medium'
            )}
            {...props}
        />
    );
}
