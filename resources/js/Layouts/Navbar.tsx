import { Link, usePage } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Dropdown, DropdownLink } from '@/Components/Dropdown';
import { PageProps } from '@/types';

export default function Navbar() {
    const { auth } = usePage<PageProps>().props;

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
                            {auth.user && (
                                <NavLink active={route().current('dashboard')} href='/dashboard'>
                                    Dashboard
                                </NavLink>
                            )}
                        </div>
                    </div>
                    {auth.user ? (
                        <div className='flex items-center'>
                            <Dropdown
                                trigger={
                                    <div className='flex items-center gap-x-2 [&>img]:h-6 [&>img]:w-6 [&>img]:shrink-0 [&>img]:rounded-full'>
                                        <img
                                            src={`https://avatar.vercel.sh/rauchg.svg?text=${auth.user?.acronym}`}
                                            alt={auth.user?.name}
                                        />
                                        {auth.user?.name}
                                    </div>
                                }>
                                {auth.user?.username ? (
                                    <>
                                        <div className='px-4 py-2 text-sm text-slate-500'>
                                            Signed as{' '}
                                            <strong className='font-semibold text-slate-900'>
                                                {auth.user?.username}
                                            </strong>
                                        </div>
                                    </>
                                ) : null}
                                <div className='py-1'>
                                    <DropdownLink isActive={route().current('dashboard')} href={route('dashboard')}>
                                        Dashboard
                                    </DropdownLink>
                                    <DropdownLink
                                        isActive={route().current('profile.edit')}
                                        href={route('profile.edit')}>
                                        Settings
                                    </DropdownLink>
                                </div>
                                <DropdownLink href={route('logout')} method='post' as='button'>
                                    Log out
                                </DropdownLink>
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
