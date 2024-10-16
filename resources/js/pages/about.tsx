import { Head } from '@inertiajs/react';
import { Container } from 'components/container';
import { Header } from 'components/header';
import { AppLayout } from 'layouts';
import React from 'react';

export default function About() {
    return (
        <>
            <Head title="About Us" />
            <Header title="About Us" />
            <Container>{/* Your about page content goes here. */}</Container>
        </>
    );
}

About.layout = (page: React.ReactNode) => <AppLayout children={page} />;
