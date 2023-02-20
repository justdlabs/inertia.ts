import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

interface Props {
    href: string;
    active?: boolean;
}

export default function NavLink({ active, href, children }: PropsWithChildren<Props>) {
    const classes = active
        ? 'inline-flex items-center px-1 pt-1 border-b-2 border-primary-400 text-sm font-medium leading-5 text-slate-900 focus:outline-none focus:border-primary-500 transition'
        : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-slate-500 hover:text-slate-700 hover:border-slate-300 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition';

    return (
        <Link href={href} className={classes}>
            {children}
        </Link>
    );
}
