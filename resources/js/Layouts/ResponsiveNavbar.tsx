import { usePage } from '@inertiajs/inertia-react';
import NavLink from '@/Components/NavLink';
import ApplicationLogo from '@/Components/ApplicationLogo';
import DropdownMenu from '@/Components/DropdownMenu';
import route from 'ziggy-js';
import useRoute from '@/Hooks/useRoute';

interface User {
    user?: {
        id: string;
        name: string;
    };
}

const ResponsiveNavbar = () => {
    const { user }: User | any = usePage().props.auth;
    const route = useRoute();
    return (
        <nav className='block border-b bg-white py-2 sm:hidden'>
            <div className='container'>
                <div className='flex items-center justify-between py-1'>
                    <ApplicationLogo className='w-8 fill-red-600' />
                    <DropdownMenu triggerWithMenuIcon>
                        <div>
                            <DropdownMenu.Link href='/'>Home</DropdownMenu.Link>
                        </div>
                        {user ? (
                            <div className='divide-y'>
                                <div>
                                    <DropdownMenu.Link href={route('dashboard')}>Dashboard</DropdownMenu.Link>
                                    <DropdownMenu.Link href={route('profile.edit')}>Profile</DropdownMenu.Link>
                                </div>
                                <div>
                                    <DropdownMenu.Link href={route('logout')} method='post' as='button'>
                                        Log out
                                    </DropdownMenu.Link>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <NavLink href={route('login')}>Login</NavLink>
                                <NavLink href={route('register')}>Register</NavLink>
                            </div>
                        )}
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
};

export default ResponsiveNavbar;
