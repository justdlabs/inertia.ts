import { Link, usePage } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';

interface User {
    user?: {
        id: string;
        name: string;
    };
}

const ResponsiveNavbar = () => {
    const { user }: User | any = usePage().props.auth;
    return (
        <nav className='block border-b bg-white py-2 sm:hidden'>
            <div className='container'>
                <div className='flex items-center justify-between py-1'>
                    <Link href='/'>
                        <ApplicationLogo className='w-8 fill-red-600' />
                    </Link>
                    <Dropdown triggerWithMenuIcon>
                        <div>
                            <Dropdown.Link href={route('home')}>Home</Dropdown.Link>
                        </div>
                        {user ? (
                            <div className='divide-y'>
                                <div>
                                    <Dropdown.Link href={route('dashboard')}>Dashboard</Dropdown.Link>
                                    <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                </div>
                                <div>
                                    <Dropdown.Link href={route('logout')} method='post' as='button'>
                                        Log out
                                    </Dropdown.Link>
                                </div>
                            </div>
                        ) : (
                            <>
                                <Dropdown.Divider />
                                <Dropdown.Link href={route('login')}>Login</Dropdown.Link>
                                <Dropdown.Link href={route('register')}>Register</Dropdown.Link>
                            </>
                        )}
                    </Dropdown>
                </div>
            </div>
        </nav>
    );
};

export default ResponsiveNavbar;
