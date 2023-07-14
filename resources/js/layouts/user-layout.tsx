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
            <div>
                <Aside />
                <main className='lg:pl-80'>
                    <div className='px-4 py-10 sm:px-6 lg:px-8 lg:py-10'>{children}</div>
                </main>
            </div>
        </div>
    );
}
