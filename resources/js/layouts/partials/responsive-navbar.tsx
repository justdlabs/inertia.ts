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
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IconChevronDown, IconLogin, IconSettings2, IconUserCircle } from '@tabler/icons-react';
import React from 'react';
import { getFirstWord, strLimit } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const ResponsiveNavbar = () => {
    const { auth } = usePage<PageProps>().props;
    return (
        <nav className='block border-b px-4 py-2 sm:hidden'>
            <div className='flex items-center justify-between py-1'>
                <Link href='/'>
                    <ApplicationLogo className='w-8 fill-red-600' />
                </Link>
                <div className='flex items-center gap-x-1'>
                    <ThemeToggle />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className='focus:outline-none'>
                            <Button variant='secondary' className='bg-secondary/50 hover:bg-secondary/60 border'>
                                {auth?.user ? getFirstWord(auth.user.name, 5) : 'Menu'}
                                <IconChevronDown className='ml-2 h-4 w-4' />
                            </Button>
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
                                                <div className='text-muted-foreground'>
                                                    {strLimit(auth.user.email, 28)}
                                                </div>
                                            </div>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                </>
                            )}
                            <DropdownMenuItem onClick={() => router.get(route('home'))}>
                                <span>Home</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => router.get(route('about'))}>
                                <span>About</span>
                            </DropdownMenuItem>
                            {auth?.user ? (
                                <>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => router.get(route('dashboard'))}>
                                        <span>Dashboard</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        className='flex justify-between items-center'
                                        onClick={() => router.get(route('profile.edit'))}>
                                        <span>Profile</span>
                                        <IconSettings2 className='h-4 w-4' />
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => router.get(route('users.index'))}>
                                        <span>Users</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => router.post(route('logout'))}>
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
