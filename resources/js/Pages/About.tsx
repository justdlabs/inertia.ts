import { Head } from '@inertiajs/react';
import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import Header from '@/Components/Header';
import Container from '@/Components/Container';

export default function About({ about }: { about: string }) {
    return (
        <>
            <Head title='About Us' />
            <Header
                title='About Us'
                description='This page is rendered using markdown, you find it in <code>resources/markdown/about.md</code> if you
                want to edit it.'
            />
            <Container>
                <div
                    className='prose prose-lg prose-indigo mt-6 text-primary dark:prose-invert prose-blockquote:text-muted-foreground'
                    dangerouslySetInnerHTML={{ __html: about }}
                />
            </Container>
        </>
    );
}

About.layout = (page: React.ReactNode) => <AppLayout children={page} />;
