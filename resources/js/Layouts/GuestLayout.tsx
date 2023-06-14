import { PropsWithChildren, ReactNode } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { Card, CardContent } from '@/Components/Card';
import SectionTitle from '@/Components/SectionTitle';

interface GuestLayoutProps {
    header?: string | null;
    description?: string | ReactNode | null;
}

export default function Guest({ description = null, header = null, children }: PropsWithChildren<GuestLayoutProps>) {
    return (
        <div className='flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0'>
            <Link href={route('home')}>
                <ApplicationLogo className='mx-auto h-16 w-16 fill-current text-red-500' />
            </Link>

            <div className='mt-10 w-full max-w-lg'>
                <Card>
                    <SectionTitle title={header} description={description} />
                    <CardContent>{children}</CardContent>
                </Card>
            </div>
        </div>
    );
}
