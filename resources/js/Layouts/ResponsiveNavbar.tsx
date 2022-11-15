import { Link, usePage } from '@inertiajs/inertia-react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import DropdownMenu from '@/Components/DropdownMenu';
import useRoute from '@/Hooks/useRoute';
import { IconDashboard, IconHome2, IconLogin, IconLogout, IconSettings, IconUserCircle } from '@tabler/icons';

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
                    <Link href='/'>
                        <ApplicationLogo className='w-8 fill-red-600' />
                    </Link>
                    <DropdownMenu triggerWithMenuIcon>
                        <div>
                            <DropdownMenu.Link icon={IconHome2} href='/'>
                                Home
                            </DropdownMenu.Link>
                        </div>
                        {user ? (
                            <div className='divide-y'>
                                <div>
                                    <DropdownMenu.Link icon={IconDashboard} href={route('dashboard')}>
                                        Dashboard
                                    </DropdownMenu.Link>
                                    <DropdownMenu.Link icon={IconSettings} href={route('profile.edit')}>
                                        Profile
                                    </DropdownMenu.Link>
                                </div>
                                <div>
                                    <DropdownMenu.Link
                                        icon={IconLogout}
                                        href={route('logout')}
                                        method='post'
                                        as='button'>
                                        Log out
                                    </DropdownMenu.Link>
                                </div>
                            </div>
                        ) : (
                            <>
                                <DropdownMenu.Divider />
                                <DropdownMenu.Link icon={IconLogin} href={route('login')}>
                                    Login
                                </DropdownMenu.Link>
                                <DropdownMenu.Link icon={IconUserCircle} href={route('register')}>
                                    Register
                                </DropdownMenu.Link>
                            </>
                        )}
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
};

export default ResponsiveNavbar;
