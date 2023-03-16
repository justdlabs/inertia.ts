import React, { PropsWithChildren } from 'react';
import Navbar from '@/Layouts/Navbar';
import ResponsiveNavbar from '@/Layouts/ResponsiveNavbar';
import Footer from '@/Layouts/Footer';

export default function AppLayout({ children }: PropsWithChildren) {
    return (
        <div className='min-h-screen bg-white'>
            <ResponsiveNavbar />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
