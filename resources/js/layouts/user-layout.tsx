import React, { PropsWithChildren } from 'react';
import { Aside } from '@/layouts/partials/aside/aside';
import { Head } from '@inertiajs/react';
import { Toaster } from '@/components/ui/toaster';
import ResponsiveNavbar from '@/layouts/partials/responsive-navbar';

interface Props {
    title?: string;
}

export function UserLayout({ title, children }: PropsWithChildren<Props>) {
    return (
        <div>
            <Toaster />
            <ResponsiveNavbar />
            <Head title={title} />
            <div className='flex max-w-screen-2x mx-auto'>
                <Aside />
                <main className='w-full'>
                    <div className='sm:p-8 p-6'>{children}</div>
                </main>
            </div>
        </div>
    );
}
