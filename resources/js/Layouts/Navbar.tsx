import { Link } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import useTypedPage from '@/Hooks/useTypedPage';
import route from 'ziggy-js';

export default function Navbar() {
    const { user } = useTypedPage().props.auth;
    return (
        <nav className='hidden border-b border-slate-200 bg-white sm:block'>
            <div className='mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8'>
                <div className='flex h-16 justify-between'>
                    <div className='flex'>
                        <div className='flex shrink-0 items-center'>
                            <Link href='/'>
                                <ApplicationLogo className='w-8 fill-red-600' />
                            </Link>
                        </div>
                        <div className='hidden gap-x-8 sm:-my-px sm:ml-10 sm:flex'>
                            <NavLink active={route().current('home')} href='/'>
                                Home
                            </NavLink>
                            <NavLink active={route().current('about')} href={route('about')}>
                                About
                            </NavLink>
                            {user && (
                                <NavLink active={route().current('dashboard')} href='/dashboard'>
                                    Dashboard
                                </NavLink>
                            )}
                        </div>
                    </div>
                    {user ? (
                        <div className='flex items-center'>
                            <Dropdown
                                trigger={
                                    <div className='flex items-center gap-x-2 [&>img]:h-6 [&>img]:shrink-0 [&>img]:w-6 [&>img]:rounded-full'>
                                        <img
                                            src={`https://avatar.vercel.sh/rauchg.svg?text=${user?.acronym}`}
                                            alt={user?.name}
                                        />
                                        {user?.name}
                                    </div>
                                }>
                                {user?.username ? (
                                    <>
                                        <div className='px-4 py-0.5 text-sm text-slate-500'>
                                            Signed as{' '}
                                            <strong className='font-semibold text-slate-900'>{user.username}</strong>
                                        </div>
                                        <Dropdown.Divider />
                                    </>
                                ) : null}
                                <Dropdown.Link isActive={route().current('dashboard')} href={route('dashboard')}>
                                    Dashboard
                                </Dropdown.Link>
                                <Dropdown.Link isActive={route().current('profile.edit')} href={route('profile.edit')}>
                                    Settings
                                </Dropdown.Link>
                                <Dropdown.Divider />
                                <Dropdown.Link href={route('logout')} method='post' as='button'>
                                    Log out
                                </Dropdown.Link>
                            </Dropdown>
                        </div>
                    ) : (
                        <div className='-mb-px flex gap-x-8'>
                            <NavLink href={route('login')}>Login</NavLink>
                            <NavLink href={route('register')}>Register</NavLink>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
