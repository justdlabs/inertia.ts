import AppLayout from '@/Layouts/AppLayout';
import { Head, usePage } from '@inertiajs/react';
import Header from '@/Components/Header';
import Container from '@/Components/Container';
import { PageProps } from '@/types';

export default function Dashboard() {
    const { auth } = usePage<PageProps>().props;
    return (
        <>
            <Head title='Dashboard' />
            <Header value='Dashboard'>
                Dashboard is the protected page. You can only access this page if you are logged in.
            </Header>
            <Container>
                <div className='overflow-hidden rounded-lg shadow'>
                    <p className='bg-white p-4'>Hi {auth.user.name}, you are now logged in.</p>
                    <div className='bg-slate-900 p-4 font-mono text-sm text-slate-200'>
                        <div>
                            <div className='mb-2 text-slate-400'>// The page you are currently visiting is</div>
                            <div className='text-lime-400'>"resources/js/Pages/Dashboard.tsx"</div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

Dashboard.layout = (page: any) => <AppLayout children={page} />;
