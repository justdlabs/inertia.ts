import { PropsWithChildren, ReactNode } from 'react';
import ApplicationLogo from '@/components/application-logo';
import { Link } from '@inertiajs/react';
import { Card, CardContent } from '@/components/card';
import SectionTitle from '@/components/section-title';
import { ThemeToggle } from '@/components/theme-toggle';

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
                <Card className='sm:border-l-border shadow-none sm:shadow-sm sm:border-r-border rounded-none sm:rounded-lg lg:rounded-xl border-l-transparent border-r-transparent '>
                    <SectionTitle title={header} description={description} />
                    <CardContent>{children}</CardContent>
                </Card>

                <div className="absolute bottom-0 right-0 mb-4 mr-4">
                    <ThemeToggle/>
                </div>
            </div>
        </div>
    );
}
