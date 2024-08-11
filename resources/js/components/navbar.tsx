import { PagePropsData } from '@/types'
import { usePage } from '@inertiajs/react'
import { Container } from 'components/container'
import { Logo } from 'components/logo'
import { ThemeSwitcher } from 'components/theme-switcher'
import { motion } from 'framer-motion'
import {
    IconBrandJustd,
    IconBrandLaravel,
    IconChevronDown,
    IconColorSwatch,
    IconHamburger,
    IconSettings
} from 'justd-icons'
import React from 'react'
import { ListBox, ListBoxItem, ListBoxItemProps } from 'react-aria-components'
import { tv } from 'tailwind-variants'
import {
    Avatar,
    Button,
    Link,
    Menu,
    MenuContent,
    MenuHeader,
    MenuItem,
    MenuSection,
    MenuSeparator,
    MenuTrigger,
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    useMediaQuery
} from 'ui'

const navigations = [
    {
        name: 'Home',
        textValue: 'Home',
        href: '/'
    },
    {
        name: 'About',
        textValue: 'About',
        href: '/about'
    },
    {
        name: 'Github',
        textValue: 'Github Repository',
        href: 'https://github.com/irsyadadl/inertia.ts',
        className: 'justify-between'
    },
    {
        name: 'Components',
        textValue: 'Just D. Components',
        href: 'https://getjustd.com',
        className: 'justify-between'
    },
    {
        name: 'Colors',
        textValue: 'Just D. Colors',
        href: 'https://getjustd.com/colors',
        className: 'justify-between'
    },
    {
        name: 'Templates',
        textValue: 'Next.js Template',
        href: 'https://irsyad.co/s',
        className: 'justify-between'
    }
]

export function Navbar() {
    const { auth } = usePage<PagePropsData>().props
    return (
        <>
            <ResponsiveNavbar />
            <nav className="relative bg-background z-10 hidden border-b py-1 sm:block">
                <Container>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Link href="/" className="mr-6">
                                <Logo />
                            </Link>
                            <NavContent />
                        </div>
                        <div className="gap-1 flex">
                            {!auth.user && <ThemeSwitcher />}
                            {auth.user ? <UserMenu /> : <LoginMenu />}
                        </div>
                    </div>
                </Container>
            </nav>
        </>
    )
}

const navStyles = tv({
    base: 'text-sm relative py-0 sm:py-4 inline-flex focus:outline-none focus-visible:text-fg font-medium',
    variants: {
        isCurrent: {
            true: 'text-fg',
            false: 'text-muted-fg hover:text-fg'
        }
    }
})

interface LinkProps extends ListBoxItemProps {
    className?: string
    children: React.ReactNode
    target?: string
    href?: string
}

function NavLink({ children, className, ...props }: LinkProps) {
    const pathname = usePage().url
    const isCurrent = pathname === props.href
    return (
        <ListBoxItem className={navStyles({ isCurrent, className })} {...props}>
            {children}
            {isCurrent && <CurrentIndicator />}
        </ListBoxItem>
    )
}

function CurrentIndicator() {
    return (
        <motion.span
            className="h-full inset-y-0 sm:inset-auto sm:h-0.5 w-0.5 sm:w-full rounded-full bg-fg -left-4 sm:bottom-[-5px] sm:inset-x block absolute"
            layoutId="current"
        />
    )
}

function LoginMenu() {
    return (
        <Menu>
            <Button size="small" appearance="outline">
                Login
                <IconChevronDown className="ml-2" />
            </Button>
            <MenuContent showArrow placement="bottom end" className="w-40">
                <MenuItem href={route('login')}>Login</MenuItem>
                <MenuItem href={route('register')}>Register</MenuItem>
            </MenuContent>
        </Menu>
    )
}

function UserMenu() {
    const { auth } = usePage<PagePropsData>().props
    return (
        <Menu>
            <MenuTrigger aria-label="Open menu">
                <Avatar status="online" size="medium" src={auth.user.gravatar} className="size-8" />
            </MenuTrigger>
            <MenuContent showArrow placement="bottom end" className="min-w-56">
                <MenuSection>
                    <MenuHeader separator className="relative">
                        <div className="absolute right-2 top-2">
                            <ThemeSwitcher />
                        </div>
                        <div>{auth.user.name}</div>
                        <div className="text-muted-fg font-normal text-sm whitespace-nowrap truncate pr-10">
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
                <MenuItem target="_blank" href="https://laravel.com" className="justify-between">
                    Documentation
                    <IconBrandLaravel />
                </MenuItem>
                <MenuItem target="_blank" href="https://getjustd.com" className="justify-between">
                    Components
                    <IconBrandJustd />
                </MenuItem>
                <MenuItem target="_blank" href="https://getjustd.com/colors" className="justify-between">
                    Colors
                    <IconColorSwatch />
                </MenuItem>
                <MenuSeparator />
                <MenuItem routerOptions={{ method: 'post' }} href={route('logout')}>
                    <span>Logout</span>
                </MenuItem>
            </MenuContent>
        </Menu>
    )
}

function ResponsiveNavbar() {
    const { auth } = usePage<PagePropsData>().props
    return (
        <nav className="block border-b px-4 py-2 sm:hidden">
            <div className="flex items-center justify-between py-1">
                <div className="gap-2 flex items-center">
                    <Sheet>
                        <Button size="small" appearance="outline">
                            <IconHamburger />
                            Menu
                        </Button>
                        <SheetContent>
                            <SheetHeader className="text-left">
                                <SheetTitle className="inline-flex items-center gap-x-2">
                                    <Logo />
                                    {import.meta.env.VITE_APP_NAME}
                                </SheetTitle>
                            </SheetHeader>
                            <NavContent />
                        </SheetContent>
                    </Sheet>

                    <Link href="/">
                        <Logo className="w-8 fill-red-600" />
                    </Link>
                </div>
                {!auth.user && <ThemeSwitcher />}
                {auth.user ? <UserMenu /> : <LoginMenu />}
            </div>
        </nav>
    )
}

function NavContent() {
    const isMobile = useMediaQuery('(max-width: 640px)')
    return (
        <ListBox
            aria-label="Navigation"
            orientation={isMobile ? 'vertical' : 'horizontal'}
            layout={isMobile ? 'stack' : 'grid'}
            className="flex sm:flex-row flex-col sm:items-center gap-y-4 sm:gap-x-6"
            items={navigations}
        >
            {(item) => (
                <NavLink
                    id={item.textValue}
                    textValue={item.textValue}
                    href={item.href}
                    target={['Github', 'Components', 'Colors', 'Templates'].includes(item.name) ? '_blank' : undefined}
                    className={item.className}
                >
                    {item.name}
                </NavLink>
            )}
        </ListBox>
    )
}
