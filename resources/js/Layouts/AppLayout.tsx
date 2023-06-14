import React, { PropsWithChildren } from 'react';
import Navbar from '@/Layouts/Navbar';
import ResponsiveNavbar from '@/Layouts/ResponsiveNavbar';
import Footer from '@/Layouts/Footer';

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
