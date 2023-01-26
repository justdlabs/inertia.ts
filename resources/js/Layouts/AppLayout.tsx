import React from 'react';
import Navbar from '@/Layouts/Navbar';
import ResponsiveNavbar from '@/Layouts/ResponsiveNavbar';
import { Footer } from '@/Layouts/Footer';

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: RootLayoutProps) {
    return (
        <div className='min-h-screen bg-gray-100'>
            <ResponsiveNavbar />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
