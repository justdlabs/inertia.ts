import { Head } from '@inertiajs/react';
import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import Header from '@/Components/Header';
import Container from '@/Components/Container';

export default function About({ about }: { about: string }) {
    return (
        <>
            <Head title='About Us' />
            <Header value='About Us'>
                This page is rendered using markdown, you find it in <code>resources/markdown/about.md</code> if you
                want to edit it.
            </Header>
            <Container>
                <div
                    className='prose prose-lg prose-indigo mt-6 text-gray-500'
                    dangerouslySetInnerHTML={{ __html: about }}
                />
            </Container>
        </>
    );
}

About.layout = (page: React.ReactNode) => <AppLayout children={page} />;
