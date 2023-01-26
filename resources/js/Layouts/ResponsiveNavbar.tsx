import { Link, usePage } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
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
                    <Dropdown triggerWithMenuIcon>
                        <div>
                            <Dropdown.Link icon={IconHome2} href='/'>
                                Home
                            </Dropdown.Link>
                        </div>
                        {user ? (
                            <div className='divide-y'>
                                <div>
                                    <Dropdown.Link icon={IconDashboard} href={route('dashboard')}>
                                        Dashboard
                                    </Dropdown.Link>
                                    <Dropdown.Link icon={IconSettings} href={route('profile.edit')}>
                                        Profile
                                    </Dropdown.Link>
                                </div>
                                <div>
                                    <Dropdown.Link icon={IconLogout} href={route('logout')} method='post' as='button'>
                                        Log out
                                    </Dropdown.Link>
                                </div>
                            </div>
                        ) : (
                            <>
                                <Dropdown.Divider />
                                <Dropdown.Link icon={IconLogin} href={route('login')}>
                                    Login
                                </Dropdown.Link>
                                <Dropdown.Link icon={IconUserCircle} href={route('register')}>
                                    Register
                                </Dropdown.Link>
                            </>
                        )}
                    </Dropdown>
                </div>
            </div>
        </nav>
    );
};

export default ResponsiveNavbar;
