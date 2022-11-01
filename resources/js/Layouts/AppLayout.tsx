import React from 'react';
import Navbar from '@/Layouts/Navbar';
import ResponsiveNavbar from '@/Layouts/ResponsiveNavbar';

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: RootLayoutProps) {
    return (
        <div className='min-h-screen bg-gray-100'>
            <ResponsiveNavbar />
            <Navbar />
            <main className='pt-4 lg:pt-8'>{children}</main>
        </div>
    );
}
