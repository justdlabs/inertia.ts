import { Head } from '@inertiajs/react';
import React from 'react';
import { AppLayout } from '@/layouts/app-layout';
import Header from '@/components/header';
import Container from '@/components/container';

export default function About({ about }: { about: string }) {
    return (
        <>
            <Head title='About Us' />
            <Header
                title='About Us'
                description={
                    <>
                        This page is rendered using markdown, you find it in{' '}
                        <code className='font-mono text-yellow-500'>resources/markdown/about.md</code> if you want to
                        edit it.
                    </>
                }
            />
            <Container>
                <div
                    className='prose prose-lg prose-zinc mt-6 dark:prose-invert prose-blockquote:text-muted-foreground'
                    dangerouslySetInnerHTML={{ __html: about }}
                />
            </Container>
        </>
    );
}

About.layout = (page: React.ReactNode) => <AppLayout children={page} />;
