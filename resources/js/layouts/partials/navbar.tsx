import { Logo } from '@/components/logo'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Menu, MenuContent, MenuHeader, MenuItem, MenuSection, MenuSeparator, MenuTrigger } from '@/components/ui/menu'
import ResponsiveNavbar from '@/layouts/partials/responsive-navbar'
import { cn } from '@/lib/utils'
import { PagePropsData } from '@/types'
import { InertiaLinkProps, Link, usePage } from '@inertiajs/react'
import { IconChevronDown, IconSettings } from '@irsyadadl/paranoid'

export default function Navbar() {
    const { auth } = usePage<PagePropsData>().props
    return (
        <>
            <ResponsiveNavbar />
            <nav className="relative bg-background z-10 hidden border-b py-3 sm:block">
                <div className="mx-auto max-w-screen-2xl items-center sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-4">
                            <Link href="/" className="mr-3">
                                <Logo className="w-9 fill-fg" />
                            </Link>
                            <NavLink active={route().current('home')} href="/">
                                Home
                            </NavLink>
                            <NavLink active={route().current('about')} href={route('about')}>
                                About
                            </NavLink>
                        </div>
                        {auth.user ? (
                            <div className="flex items-center gap-x-1">
                                <Menu>
                                    <MenuTrigger aria-label="Open menu">
                                        <Avatar size="medium" src={auth.user.gravatar} className="size-8" />
                                    </MenuTrigger>
                                    <MenuContent placement="bottom end" className="w-60">
                                        <MenuSection>
                                            <MenuHeader separator>
                                                <div>{auth.user.name}</div>
                                                <div className="text-muted-fg font-normal text-sm">
                                                    {auth.user.email}
                                                </div>
                                            </MenuHeader>
                                        </MenuSection>
                                        <MenuItem href={route('dashboard')}>Dashboard</MenuItem>
                                        <MenuItem href={route('profile.edit')} className="justify-between">
                                            Settings
                                            <IconSettings />
                                        </MenuItem>
                                        <MenuSeparator />
                                        <MenuItem routerOptions={{ method: 'post' }} href={route('logout')}>
                                            <span>Logout</span>
                                        </MenuItem>
                                    </MenuContent>
                                </Menu>
                            </div>
                        ) : (
                            <Menu>
                                <Button appearance="outline">
                                    Login
                                    <IconChevronDown className="ml-2" />
                                </Button>
                                <MenuContent placement="bottom end" className="w-40">
                                    <MenuItem href={route('login')}>Login</MenuItem>
                                    <MenuItem href={route('register')}>Register</MenuItem>
                                </MenuContent>
                            </Menu>
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}

export function NavLink({
    active,
    ...props
}: InertiaLinkProps & {
    active?: boolean
}) {
    return (
        <Link
            {...props}
            className={cn(
                active ? 'text-fg' : 'text-muted-fg',
                'px-3 py-2.5 text-sm font-medium transition-colors hover:text-fg'
            )}
        />
    )
}
