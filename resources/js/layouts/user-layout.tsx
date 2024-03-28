import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Head, Link, usePage } from '@inertiajs/react';
import { IconHamburger } from '@irsyadadl/paranoid';
import React from 'react';
import { ApplicationLogo } from '@/components/application-logo.tsx';
import { PageProps } from '@/types';
import { Aside } from '@/layouts/partials/aside/aside.tsx';

export function UserLayout({ title, children }: { title?: string; children: React.ReactNode }) {
    const { auth } = usePage<PageProps>().props;
    return (
        <>
            <Head title={title} />
            <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
                <div className='hidden border-r bg-muted/40 md:block'>
                    <div className='flex h-full max-h-screen flex-col gap-2'>
                        <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
                            <Link href='/' className='flex items-center gap-2 font-semibold'>
                                <ApplicationLogo className='size-6 fill-foreground' />
                                <span className=''>Acme Inc</span>
                            </Link>
                        </div>
                        <div className='flex-1 py-1'>
                            <Aside />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <header className='flex h-14 items-center justify-between lg:justify-end gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6'>
                        <Sheet>
                            <SheetTrigger className='lg:hidden'>
                                <IconHamburger className='size-5' />
                                <span className='sr-only'>Toggle navigation menu</span>
                            </SheetTrigger>
                            <SheetContent side='left' className='flex flex-col p-0'>
                                <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
                                    <Link href='/' className='flex items-center gap-2 font-semibold'>
                                        <ApplicationLogo className='size-6 fill-foreground' />
                                        <span className=''>Acme Inc</span>
                                    </Link>
                                </div>
                                <div className='-mt-2'>
                                    <Aside />
                                </div>
                            </SheetContent>
                        </Sheet>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Avatar className='size-6'>
                                    <AvatarImage src={auth.user.avatar} />
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end' className='w-56'>
                                <DropdownMenuLabel>
                                    <div>{auth.user.name}</div>
                                    <div className='text-muted-foreground font-normal text-sm'>{auth.user.email}</div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href={route('profile.edit')}>Settings</Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href='/logout' as='button' method='post'>
                                        Logout
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </header>
                    <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>{children}</main>
                </div>
            </div>
        </>
    );
}
