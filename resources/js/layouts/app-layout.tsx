import React, { PropsWithChildren } from 'react';
import Navbar from '@/layouts/partials/navbar';
import Footer from '@/layouts/partials/footer';
import { Toaster } from '@/components/toaster';

export function AppLayout({ children }: PropsWithChildren) {
    return (
        <div>
            <Toaster />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
