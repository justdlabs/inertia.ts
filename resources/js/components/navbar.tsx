import { PagePropsData } from '@/types'
import { usePage } from '@inertiajs/react'
import { Container } from 'components/container'
import { Logo } from 'components/logo'
import { useTheme } from 'components/theme-provider'
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
import { ListBox, ListBoxItem, ListBoxItemProps, Selection } from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { Avatar, Button, Link, Menu, Sheet, useMediaQuery } from 'ui'

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
            <nav className="relative bg-bg z-10 hidden border-b py-1 sm:block">
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
            <Menu.Content showArrow placement="bottom end" className="w-40">
                <Menu.Item href={route('login')}>Login</Menu.Item>
                <Menu.Item href={route('register')}>Register</Menu.Item>
            </Menu.Content>
        </Menu>
    )
}

function UserMenu() {
    const { auth } = usePage<PagePropsData>().props
    const { theme, setTheme } = useTheme()
    const currentTheme = theme || 'system'
    const [selectedTheme, setSelectedTheme] = React.useState<Selection>(new Set([currentTheme]))
    return (
        <Menu>
            <Menu.Trigger aria-label="Open menu">
                <Avatar status="online" size="medium" src={auth.user.gravatar} className="size-8" />
            </Menu.Trigger>
            <Menu.Content showArrow placement="bottom end" className="min-w-56">
                <Menu.Section>
                    <Menu.Header separator className="relative">
                        <div>{auth.user.name}</div>
                        <div className="text-muted-fg font-normal text-sm whitespace-nowrap truncate pr-6">
                            {auth.user.email}
                        </div>
                    </Menu.Header>
                </Menu.Section>
                <Menu.Item href={route('dashboard')}>Dashboard</Menu.Item>
                <Menu.Item href={route('profile.edit')} className="justify-between">
                    Settings
                    <IconSettings />
                </Menu.Item>
                <Menu.Submenu>
                    <Menu.Item>Preferences</Menu.Item>
                    <Menu.Content
                        selectionMode="single"
                        selectedKeys={selectedTheme}
                        onSelectionChange={(keys) => {
                            setSelectedTheme(keys)
                            // @ts-ignore
                            setTheme(keys.has('system') ? 'system' : keys.has('dark') ? 'dark' : 'light')
                        }}
                        items={[
                            { name: 'Light', value: 'light' },
                            { name: 'Dark', value: 'dark' },
                            { name: 'System', value: 'system' }
                        ]}
                    >
                        {(item) => (
                            <Menu.Checkbox id={item.value} textValue={item.name}>
                                {item.name}
                            </Menu.Checkbox>
                        )}
                    </Menu.Content>
                </Menu.Submenu>
                <Menu.Separator />
                <Menu.Item target="_blank" href="https://laravel.com" className="justify-between">
                    Documentation
                    <IconBrandLaravel />
                </Menu.Item>
                <Menu.Item target="_blank" href="https://getjustd.com" className="justify-between">
                    Components
                    <IconBrandJustd />
                </Menu.Item>
                <Menu.Item target="_blank" href="https://getjustd.com/colors" className="justify-between">
                    Colors
                    <IconColorSwatch />
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item routerOptions={{ method: 'post' }} href={route('logout')}>
                    <span>Logout</span>
                </Menu.Item>
            </Menu.Content>
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
                        <Sheet.Content>
                            <Sheet.Header className="text-left">
                                <Sheet.Title className="inline-flex items-center gap-x-2">
                                    <Logo />
                                    {import.meta.env.VITE_APP_NAME}
                                </Sheet.Title>
                            </Sheet.Header>
                            <NavContent />
                        </Sheet.Content>
                    </Sheet>

                    <Link href="/">
                        <Logo className="w-8 fill-red-600" />
                    </Link>
                </div>
                <div className="flex gap-1">
                    {!auth.user && <ThemeSwitcher />}
                    {auth.user ? <UserMenu /> : <LoginMenu />}
                </div>
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
