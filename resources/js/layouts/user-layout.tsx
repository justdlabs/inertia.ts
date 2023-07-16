import React, { PropsWithChildren } from 'react';
import { Aside } from '@/layouts/partials/aside/aside';
import Navbar from '@/layouts/partials/navbar';
import { Head } from '@inertiajs/react';
import { Toaster } from '@/components/toaster';

interface Props {
    title?: string;
}

export function UserLayout({ title, children }: PropsWithChildren<Props>) {
    return (
        <div>
            <Toaster />
            <Head title={title} />
            <Navbar />
            <div className='flex'>
                <Aside />
                <main className='w-2/3'>
                    <div className='px-4 py-4 sm:px-6 lg:px-6 lg:py-8'>{children}</div>
                </main>
            </div>
        </div>
    );
}
