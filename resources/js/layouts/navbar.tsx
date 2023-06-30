import { Link, router, usePage } from '@inertiajs/react';
import NavLink from '@/components/nav-link';
import ApplicationLogo from '@/components/application-logo';
import { PageProps } from '@/types';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar';
import { ThemeToggle } from '@/components/theme-toggle';
import { DashboardIcon, ExitIcon, GearIcon } from '@radix-ui/react-icons';

export default function Navbar() {
    const { auth } = usePage<PageProps>().props;
    return (
        <nav className='hidden border-b sm:block'>
            <div className='mx-auto max-w-screen-2xl items-center py-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-4'>
                        <Link href='/'>
                            <ApplicationLogo className='w-8 fill-red-600' />
                        </Link>
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
                    {auth.user ? (
                        <div className='flex items-center gap-x-4'>
                            <ThemeToggle />
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Avatar>
                                        <AvatarImage src={auth.user.avatar} alt={auth.user.acronym} />
                                        <AvatarFallback>{auth.user.acronym}</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className='mr-8 w-72'>
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
                                    <DropdownMenuItem onClick={() => router.get(route('dashboard'))}>
                                        <DashboardIcon className='mr-2 h-4 w-4' />
                                        <span>Dashboard</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => router.get(route('profile.edit'))}>
                                        <GearIcon className='mr-2 h-4 w-4' />
                                        <span>Profile</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => router.post(route('logout'))}>
                                        <ExitIcon className='mr-2 h-4 w-4' />
                                        <span>Logout</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    ) : (
                        <div className='flex items-center gap-x-4'>
                            <NavLink href={route('login')}>Login</NavLink>
                            <NavLink href={route('register')}>Register</NavLink>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
