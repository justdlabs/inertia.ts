import React from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';
import NavLink from '@/Components/NavLink';
import ApplicationLogo from '@/Components/ApplicationLogo';
import DropdownMenu from '@/Components/DropdownMenu';

interface User {
    user?: {
        id: string;
        name: string;
    };
}

const Navbar = () => {
    const { user }: User | any = usePage().props.auth;
    return (
        <nav className='hidden border-b bg-white sm:block'>
            <div className='container'>
                <div className='flex items-center justify-between py-1'>
                    <div className='flex items-center gap-x-2'>
                        <Link href='/'>
                            <ApplicationLogo className='w-8 fill-red-600' />
                        </Link>
                        <NavLink href='/'>Home</NavLink>
                        {user ? <NavLink href='/dashboard'>Dashboard</NavLink> : null}
                    </div>
                    {user ? (
                        <DropdownMenu trigger={user?.name}>
                            <div>
                                <DropdownMenu.Link href={'#'}>Settings</DropdownMenu.Link>
                                <DropdownMenu.Link href={'#'}>Documentation</DropdownMenu.Link>
                                <DropdownMenu.Link href={'#'}>Example</DropdownMenu.Link>
                                <DropdownMenu.Link href={'#'}>Another example</DropdownMenu.Link>
                            </div>
                            <div>
                                <DropdownMenu.Link href={'/logout'} method='post' as='button'>
                                    Log out
                                </DropdownMenu.Link>
                            </div>
                        </DropdownMenu>
                    ) : (
                        <div className='flex items-center gap-x-2'>
                            <NavLink href='/login'>Login</NavLink>
                            <NavLink href='/register'>Register</NavLink>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
