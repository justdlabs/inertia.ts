import React, { PropsWithChildren } from 'react';
import Navbar from '@/layouts/navbar';
import ResponsiveNavbar from '@/layouts/responsive-navbar';
import Footer from '@/layouts/footer';
import { Toaster } from '@/components/toaster';

export default function AppLayout({ children }: PropsWithChildren) {
    return (
        <div>
            <Toaster />
            <ResponsiveNavbar />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
