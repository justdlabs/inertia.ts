import { Link, usePage } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { PageProps } from '@/types';

const ResponsiveNavbar = () => {
    const { auth } = usePage<PageProps>().props;
    return (
        <nav className='block border-b bg-white py-2 sm:hidden'>
            <div className='container'>
                <div className='flex items-center justify-between py-1'>
                    <Link href='/'>
                        <ApplicationLogo className='w-8 fill-red-600' />
                    </Link>
                    {/*<Dropdown trigger='Menu'>*/}
                    {/*    <div>*/}
                    {/*        <DropdownLink href={route('home')}>Home</DropdownLink>*/}
                    {/*    </div>*/}
                    {/*    {auth.user ? (*/}
                    {/*        <>*/}
                    {/*            <div className='py-1'>*/}
                    {/*                <DropdownLink href={route('dashboard')}>Dashboard</DropdownLink>*/}
                    {/*                <DropdownLink href={route('profile.edit')}>Profile</DropdownLink>*/}
                    {/*            </div>*/}
                    {/*            <div className='py-1'>*/}
                    {/*                <DropdownLink href={route('logout')} method='post' as='button'>*/}
                    {/*                    Log out*/}
                    {/*                </DropdownLink>*/}
                    {/*            </div>*/}
                    {/*        </>*/}
                    {/*    ) : (*/}
                    {/*        <>*/}
                    {/*            <DropdownLink href={route('login')}>Login</DropdownLink>*/}
                    {/*            <DropdownLink href={route('register')}>Register</DropdownLink>*/}
                    {/*        </>*/}
                    {/*    )}*/}
                    {/*</Dropdown>*/}
                </div>
            </div>
        </nav>
    );
};

export default ResponsiveNavbar;
