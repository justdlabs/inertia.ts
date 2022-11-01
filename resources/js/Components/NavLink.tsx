import React from 'react';
import { InertiaLinkProps, Link, usePage } from '@inertiajs/inertia-react';
import cx from 'clsx';

export default function NavLink(args: InertiaLinkProps) {
    const { href, children } = args;
    const { url } = usePage();
    return (
        <Link
            href={href}
            className={cx(
                url === href ? 'font-medium text-slate-900' : 'text-slate-500 ',
                'px-2 py-4 transition hover:text-slate-800'
            )}>
            {children}
        </Link>
    );
}
