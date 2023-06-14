import AppLayout from '@/Layouts/AppLayout';
import { Head, usePage } from '@inertiajs/react';
import Header from '@/Components/Header';
import Container from '@/Components/Container';
import { PageProps } from '@/types';
import { Card, CardContent } from '@/Components/Card';
import SectionTitle from '@/Components/SectionTitle';

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
