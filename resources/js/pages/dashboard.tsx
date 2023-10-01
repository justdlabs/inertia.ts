import { Head, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/section-title';
import { UserLayout } from '@/layouts/user-layout';

export default function Dashboard() {
    const { auth } = usePage<PageProps>().props;
    return (
        <>
            <Head title='Dashboard' />
            <>
                <Card>
                    <SectionTitle title='Dashboard' description={`Hi ${auth.user.name}, you are now logged in.`} />
                    <CardContent>
                        Hi {auth.user.name}, you are now logged in.
                        <div className='mb-2 text-muted-foreground'>// The page you are currently visiting is</div>
                        <div className='text-lime-600 dark:text-lime-400'>"resources/js/Pages/Dashboard.tsx"</div>
                    </CardContent>
                </Card>
            </>
        </>
    );
}

Dashboard.layout = (page: any) => <UserLayout title='Dashboard' children={page} />;
