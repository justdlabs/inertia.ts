import React, { PropsWithChildren } from 'react';
import Navbar from '@/layouts/navbar';
import ResponsiveNavbar from '@/layouts/responsive-navbar';
import Footer from '@/layouts/footer';

export default function AppLayout({ children }: PropsWithChildren) {
    return (
        <div>
            <ResponsiveNavbar />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
