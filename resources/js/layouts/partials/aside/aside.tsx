import React, { PropsWithChildren } from 'react';

import { InertiaLinkProps, Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import ApplicationLogo from '@/components/application-logo';
import {IconChevronDown, IconCircleQuestionmark, IconDashboard, IconGlobe, IconSettings} from "@irsyadadl/paranoid";

export function Aside() {
    return (
        <nav className='lg:flex hidden items-start min-h-screen border-r w-80 p-8 shrink-0'>
            <ul className='flex gap-y-1 flex-col w-full sticky top-12'>
                <li className='flex items-center justify-between mb-8'>
                    <Link href='/' className='block'>
                        <ApplicationLogo className='h-10 w-auto fill-red-600' />
                    </Link>
                </li>
                <AsideLink active={route().current('dashboard')} href={route('dashboard')}>
                    <IconDashboard />
                    <span>Dashboard</span>
                </AsideLink>
                <AsideLink active={route().current('profile.edit')} href={route('profile.edit')}>
                    <IconSettings />
                    <span>Settings</span>
                </AsideLink>

                <AsideLink href='#'>
                    <IconGlobe />
                    <span>SEO</span>
                </AsideLink>

                <AsideLink href='#'>
                    <IconCircleQuestionmark />
                    <span>Help</span>
                </AsideLink>
                <AsideLabel>
                    <IconChevronDown />
                    <span>Resources</span>
                </AsideLabel>
                <AsideLink active={route().current('users.*')} href={route('users.index')}>
                    <span className='pl-7'>Users</span>
                </AsideLink>
                <AsideLink href='#'>
                    <span className='pl-7'>Articles</span>
                </AsideLink>
                <AsideLink href='#'>
                    <span className='pl-7'>Categories</span>
                </AsideLink>
            </ul>
        </nav>
    );
}

interface AsideLinkProps extends InertiaLinkProps {
    className?: string;
    active?: boolean;
}

export function AsideLink({ className, active, ...props }: AsideLinkProps) {
    return (
        <li className='-mx-4'>
            <Link
                className={cn(
                    active ? 'text-foreground font-semibold' : 'text-muted-foreground',
                    'flex items-center [&>svg]:w-4 [&>svg]:stroke-[1.25] [&>svg]:h-4 [&>svg]:mr-3 hover:bg-accent/50 tracking-tight text-sm hover:text-foreground px-4 py-2 rounded-md'
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
