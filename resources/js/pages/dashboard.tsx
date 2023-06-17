import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';
import Header from '@/components/header';
import Container from '@/components/container';
import { PageProps } from '@/types';
import { Card, CardContent } from '@/components/card';
import SectionTitle from '@/components/section-title';

export default function Dashboard() {
    const { auth } = usePage<PageProps>().props;
    return (
        <>
            <Head title='Dashboard' />
            <Header
                title='Dashboard'
                description='Dashboard is the protected page. You can only access this page if you are logged in.'
            />
            <Container>
                <Card>
                    <SectionTitle title='Dashboard' description={`Hi ${auth.user.name}, you are now logged in.`} />
                    <CardContent>
                        Hi {auth.user.name}, you are now logged in.
                        <div className='mb-2 text-muted-foreground'>// The page you are currently visiting is</div>
                        <div className='text-lime-600 dark:text-lime-400'>"resources/js/Pages/Dashboard.tsx"</div>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}

Dashboard.layout = (page: any) => <AppLayout children={page} />;
