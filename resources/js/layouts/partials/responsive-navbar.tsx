import { Link, router, usePage } from '@inertiajs/react';
import ApplicationLogo from '@/components/application-logo';
import { PageProps } from '@/types';
import { ThemeToggle } from '@/components/theme-toggle';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar';
import {
    IconChartPie,
    IconHome,
    IconId,
    IconLogin,
    IconLogout2,
    IconMenu,
    IconSettings2,
    IconUserCircle,
    IconUsers,
} from '@tabler/icons-react';
import React from 'react';

const ResponsiveNavbar = () => {
    const { auth } = usePage<PageProps>().props;
    return (
        <nav className='block border-b px-4 py-2 sm:hidden'>
            <div className='flex items-center justify-between py-1'>
                <Link href='/'>
                    <ApplicationLogo className='w-8 fill-red-600' />
                </Link>
                <div className='flex items-center gap-x-4'>
                    <ThemeToggle />
                    <DropdownMenu>
                        <DropdownMenuTrigger className='focus:outline-none'>
                            {auth?.user ? (
                                <Avatar className='h-8 w-8'>
                                    <AvatarImage src={auth.user.avatar} alt={auth.user.acronym} />
                                    <AvatarFallback>{auth.user.acronym}</AvatarFallback>
                                </Avatar>
                            ) : (
                                <IconMenu className='h-6 w-6' />
                            )}
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='mr-8 w-72'>
                            {auth.user && (
                                <>
                                    <DropdownMenuLabel>
                                        <div className='flex items-center font-normal'>
                                            <Avatar>
                                                <AvatarImage src={auth.user.avatar} alt={auth.user.acronym} />
                                                <AvatarFallback>{auth.user.acronym}</AvatarFallback>
                                            </Avatar>
                                            <div className='ml-3'>
                                                <strong className='font-semibold text-primary'>{auth.user.name}</strong>
                                                <div className='text-muted-foreground'>{auth.user.email}</div>
                                            </div>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                </>
                            )}
                            <DropdownMenuItem onClick={() => router.get(route('home'))}>
                                <IconHome className='mr-2 h-4 w-4' />
                                <span>Home</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => router.get(route('about'))}>
                                <IconId className='mr-2 h-4 w-4' />
                                <span>About</span>
                            </DropdownMenuItem>
                            {auth?.user ? (
                                <>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => router.get(route('dashboard'))}>
                                        <IconChartPie className='mr-2 h-4 w-4' />
                                        <span>Dashboard</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => router.get(route('profile.edit'))}>
                                        <IconSettings2 className='mr-2 h-4 w-4' />
                                        <span>Profile</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => router.get(route('users.index'))}>
                                        <IconUsers className='mr-2 h-4 w-4' />
                                        <span>Users</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => router.post(route('logout'))}>
                                        <IconLogout2 className='mr-2 h-4 w-4' />
                                        <span>Logout</span>
                                    </DropdownMenuItem>
                                </>
                            ) : (
                                <>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => router.get(route('login'))}>
                                        <IconLogin className='mr-2 h-4 w-4' />
                                        <span>Login</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => router.get(route('register'))}>
                                        <IconUserCircle className='mr-2 h-4 w-4' />
                                        <span>Register</span>
                                    </DropdownMenuItem>
                                </>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
};

export default ResponsiveNavbar;
