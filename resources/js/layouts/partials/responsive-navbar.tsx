import { Logo } from '@/components/logo'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Menu, MenuContent, MenuHeader, MenuItem, MenuSection, MenuSeparator } from '@/components/ui/menu'
import { getFirstWord, strLimit } from '@/lib/utils'
import { PagePropsData } from '@/types'
import { Link, usePage } from '@inertiajs/react'
import { IconChevronDown } from '@irsyadadl/paranoid'

const ResponsiveNavbar = () => {
    const { auth } = usePage<PagePropsData>().props
    return (
        <nav className="block border-b px-4 py-2 sm:hidden">
            <div className="flex items-center justify-between py-1">
                <Link href="/">
                    <Logo className="w-8 fill-red-600" />
                </Link>
                <div className="flex items-center gap-x-1">
                    <Menu>
                        <Button appearance="outline" className="flex items-center focus:outline-none">
                            {auth.user?.id ? getFirstWord(auth.user?.name) : 'Menu'}
                            <IconChevronDown className="ml-2 size-4" />
                        </Button>
                        <MenuContent placement="bottom end" className="min-w-72">
                            {auth.user && (
                                <>
                                    <MenuHeader>
                                        <div className="flex items-center font-normal">
                                            <Avatar src={auth.user.gravatar} alt={auth.user.name} />
                                            <div className="ml-3">
                                                <strong className="font-semibold text-primary">{auth.user.name}</strong>
                                                <div className="text-muted-fg">{strLimit(auth.user.email, 28)}</div>
                                            </div>
                                        </div>
                                    </MenuHeader>
                                    <MenuSeparator />
                                </>
                            )}
                            <MenuItem href={route('home')}>Home</MenuItem>
                            <MenuItem href={route('about')}>About</MenuItem>
                            <MenuSeparator />
                            {auth?.user ? (
                                <MenuSection>
                                    <MenuItem href={route('dashboard')}>Dashboard</MenuItem>
                                    <MenuItem
                                        className="flex justify-between items-center"
                                        href={route('profile.edit')}
                                    >
                                        Profile
                                    </MenuItem>
                                    <MenuSeparator />
                                    <MenuItem href={route('logout')} routerOptions={{ method: 'post' }}>
                                        Logout
                                    </MenuItem>
                                </MenuSection>
                            ) : (
                                <MenuSection>
                                    <MenuItem href={route('login')}>Login</MenuItem>
                                    <MenuItem href={route('register')}>Register</MenuItem>
                                </MenuSection>
                            )}
                        </MenuContent>
                    </Menu>
                </div>
            </div>
        </nav>
    )
}

export default ResponsiveNavbar
