import React from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';
import NavLink from '@/Components/NavLink';
import ApplicationLogo from '@/Components/ApplicationLogo';
import DropdownMenu from '@/Components/DropdownMenu';
import useRoute from '@/Hooks/useRoute';

interface User {
    user?: {
        id: string;
        name: string;
    };
}

export default function Navbar() {
    const route = useRoute();
    const { user }: User | any = usePage().props.auth;
    return (
        <nav className='hidden border-b bg-white sm:block'>
            <div className='container'>
                <div className='flex items-center justify-between py-1'>
                    <div className='flex items-center gap-x-2'>
                        <Link href='/'>
                            <ApplicationLogo className='w-8 fill-red-600' />
                        </Link>
                        <NavLink active={route().current('home')} href='/'>
                            Home
                        </NavLink>
                    </div>
                    {user ? (
                        <DropdownMenu trigger={user?.name}>
                            <div>
                                <DropdownMenu.Link href={route('dashboard')}>Dashboard</DropdownMenu.Link>
                                <DropdownMenu.Link href={route('profile.edit')}>Profile</DropdownMenu.Link>
                            </div>
                            <div>
                                <DropdownMenu.Link href={route('logout')} method='post' as='button'>
                                    Log out
                                </DropdownMenu.Link>
                            </div>
                        </DropdownMenu>
                    ) : (
                        <div className='flex items-center gap-x-2'>
                            <NavLink href={route('login')}>Login</NavLink>
                            <NavLink href={route('register')}>Register</NavLink>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
