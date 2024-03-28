import React, { PropsWithChildren } from 'react';

import { InertiaLinkProps, Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { IconDashboard, IconGrid4, IconNotes, IconPerson, IconSettings } from '@irsyadadl/paranoid';

export function Aside() {
    return (
        <ul className='grid items-start px-2 text-sm font-medium lg:px-4'>
            <AsideLink active={route().current('dashboard')} href={route('dashboard')}>
                <IconDashboard />
                <span>Dashboard</span>
            </AsideLink>
            <AsideLink active={route().current('profile.edit')} href={route('profile.edit')}>
                <IconSettings />
                <span>Settings</span>
            </AsideLink>
            <AsideLink active={route().current('users.*')} href={route('users.index')}>
                <IconPerson />
                Users
            </AsideLink>
            <AsideLink active={route().current('articles.*')} href={route('articles.index')}>
                <IconNotes />
                Articles
            </AsideLink>
            <AsideLink active={route().current('categories.*')} href={route('categories.index')}>
                <IconGrid4 />
                Categories
            </AsideLink>
        </ul>
    );
}

interface AsideLinkProps extends InertiaLinkProps {
    className?: string;
    active?: boolean;
}

export function AsideLink({ className, active, ...props }: AsideLinkProps) {
    return (
        <li className='-mx-1'>
            <Link
                className={cn(
                    active ? 'text-foreground font-semibold' : 'text-muted-foreground',
                    'flex items-center [&>svg]:size-4 [&>svg]:stroke-[1.25] [&>svg]:mr-2 [&>svg]:-ml-1 hover:bg-accent/50 tracking-tight text-sm hover:text-foreground px-4 py-2 rounded-md'
                )}
                {...props}
            />
        </li>
    );
}

export function AsideLabel({ children, className }: PropsWithChildren<{ className?: string }>) {
    return (
        <li className='-mx-4'>
            <span
                className={cn(
                    'flex items-center text-muted-foreground [&>svg]:w-4 [&>svg]:stroke-[1.25] [&>svg]:h-4 [&>svg]:mr-3 tracking-tight text-sm px-4 py-2 rounded-md',
                    className
                )}>
                {children}
            </span>
        </li>
    );
}
