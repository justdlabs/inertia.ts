import { usePage } from '@inertiajs/inertia-react';
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
                                    <DropdownMenu.Link href='/dashboard'>Dashboard</DropdownMenu.Link>
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
                            </div>
                        ) : (
                            <div>
                                <NavLink href='/login'>Login</NavLink>
                                <NavLink href='/register'>Register</NavLink>
                            </div>
                        )}
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
