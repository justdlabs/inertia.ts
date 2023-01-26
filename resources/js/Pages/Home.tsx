import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import Header from '@/Components/Header';
import Container from '@/Components/Container';

export default function Home() {
    return (
        <>
            <Head title='Welcome to Laravel' />
            <Header>
                Home
            </Header>
            <Container>
                <div className='mx-auto rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200'>
                    <div>
                        <div className='mb-2 text-slate-400'>// The page you are currently visiting is</div>
                        <div className='text-lime-400'>"resources/js/Pages/Home.tsx"</div>
                    </div>
                </div>
            </Container>
        </>
    );
}

Home.layout = (page: any) => <AppLayout children={page} />;
