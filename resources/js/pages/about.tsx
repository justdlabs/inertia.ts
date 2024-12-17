import { Head } from '@inertiajs/react';
import { Header } from 'components/header';
import { AppLayout } from 'layouts';
import React from 'react';
import { Card, Container } from 'ui';

export default function About() {
  return (
    <>
      <Head title="About Us" />
      <Header title="About Us" />
      <Container>
        <Card className="p-6">Your about page content goes here.</Card>
      </Container>
    </>
  );
}

About.layout = (page: React.ReactNode) => <AppLayout children={page} />;
