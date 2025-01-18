import { PagePropsData } from '@/types';
import { usePage } from '@inertiajs/react';
import { useTheme } from 'components/theme-provider';
import { ThemeSwitcher } from 'components/theme-switcher';
import {
  IconArrowUpRight,
  IconBrandJustd,
  IconBrandLaravel,
  IconChevronDown,
  IconColors,
  IconColorSwatch,
  IconPackage,
  IconSettings
} from 'justd-icons';
import React from 'react';
import { Selection } from 'react-aria-components';
import { Avatar, Button, Menu, Navbar, Separator } from 'ui';

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
  }
];

export function AppNavbar({ children, ...props }: React.ComponentProps<typeof Navbar>) {
  const page = usePage();
  const { auth } = usePage<PagePropsData>().props;
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => setIsOpen(false), [page.url]);
  return (
    <Navbar isOpen={isOpen} onOpenChange={setIsOpen} {...props}>
      <Navbar.Nav>
        <Navbar.Logo aria-label="Logo">
          <IconBrandLaravel className="size-6" />
        </Navbar.Logo>
        <Navbar.Section>
          {navigations.map((item) => (
            <Navbar.Item isCurrent={item.href === page.url} key={item.href} href={item.href}>
              {item.name}
            </Navbar.Item>
          ))}
          <Menu>
            <Navbar.Item className="group">
              Resources...
              <IconChevronDown className="duration-200 size-4 ml-2 group-data-pressed:rotate-180" />
            </Navbar.Item>
            <Menu.Content className="sm:min-w-48">
              <Menu.Item target="_blank" href="https://getjustd.com/components">
                <IconPackage />
                <Menu.Label>Components</Menu.Label>
                <IconArrowUpRight className="absolute right-0" />
              </Menu.Item>
              <Menu.Item target="_blank" href="https://getjustd.com/icons">
                <IconBrandJustd />
                <Menu.Label>Icons</Menu.Label>
                <IconArrowUpRight className="absolute right-0" />
              </Menu.Item>
              <Menu.Item target="_blank" href="https://getjustd.com/themes">
                <IconColors />
                <Menu.Label>Themes</Menu.Label>
                <IconArrowUpRight className="absolute right-0" />
              </Menu.Item>
              <Menu.Item target="_blank" href="https://getjustd.com/colors">
                <IconColorSwatch />
                <Menu.Label>Colors</Menu.Label>
                <IconArrowUpRight className="absolute right-0" />
              </Menu.Item>
            </Menu.Content>
          </Menu>
        </Navbar.Section>

        <Navbar.Section className="hidden ml-auto gap-x-1 lg:flex">
          {!auth.user && <ThemeSwitcher />}
          {auth.user ? (
            <UserMenu />
          ) : (
            <>
              <Navbar.Item href={route('login')}>Login</Navbar.Item>
              <Navbar.Item href={route('register')}>Register</Navbar.Item>
            </>
          )}
        </Navbar.Section>
      </Navbar.Nav>

      <Navbar.Compact>
        <Navbar.Flex>
          <Navbar.Trigger />
          <Separator className="h-6" orientation="vertical" />
          <Navbar.Logo aria-label="Logo">
            <IconBrandLaravel />
          </Navbar.Logo>
        </Navbar.Flex>
        <Navbar.Flex className="gap-x-1">
          {!auth.user && <ThemeSwitcher />}
          {auth.user ? <UserMenu /> : <LoginMenu />}
        </Navbar.Flex>
      </Navbar.Compact>

      {children}
    </Navbar>
  );
}

function UserMenu() {
  const { auth } = usePage<PagePropsData>().props;
  const { theme, setTheme } = useTheme();
  const currentTheme = theme || 'system';
  const [selectedTheme, setSelectedTheme] = React.useState<Selection>(new Set([currentTheme]));
  return (
    <Menu>
      <Menu.Trigger aria-label="Open menu">
        <Avatar size="medium" src={auth.user.gravatar} className="size-8" />
      </Menu.Trigger>
      <Menu.Content showArrow placement="bottom end" className="sm:min-w-56">
        <Menu.Section>
          <Menu.Header separator className="relative">
            <div>{auth.user.name}</div>
            <div className="text-muted-fg font-normal text-sm whitespace-nowrap truncate pr-6">{auth.user.email}</div>
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
              setSelectedTheme(keys);
              // @ts-ignore
              setTheme(keys.has('system') ? 'system' : keys.has('dark') ? 'dark' : 'light');
            }}
            items={[
              { name: 'Light', value: 'light' },
              { name: 'Dark', value: 'dark' },
              { name: 'System', value: 'system' }
            ]}
          >
            {(item) => (
              <Menu.Item id={item.value} textValue={item.name}>
                {item.name}
              </Menu.Item>
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
  );
}

function LoginMenu() {
  return (
    <Menu>
      <Button size="small" appearance="outline">
        Login
        <IconChevronDown className="ml-2" />
      </Button>
      <Menu.Content showArrow placement="bottom end" className="sm:min-w-40">
        <Menu.Item href={route('login')}>Login</Menu.Item>
        <Menu.Item href={route('register')}>Register</Menu.Item>
      </Menu.Content>
    </Menu>
  );
}
