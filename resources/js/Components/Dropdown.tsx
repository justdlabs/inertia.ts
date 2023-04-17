import React, { Fragment, PropsWithChildren } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { IconChevronDown } from '@tabler/icons-react';
import clsx from 'clsx';
import { InertiaLinkProps, Link } from '@inertiajs/react';

export function Dropdown({
    trigger,
    children,
}: PropsWithChildren<{
    trigger: React.ReactNode;
}>) {
    return (
        <Menu as='div' className='relative inline-block text-left'>
            <div>
                <Menu.Button className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
                    {trigger}
                    <IconChevronDown className='-mr-1 h-5 w-5 text-gray-400' aria-hidden='true' />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'>
                <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    {children}
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

export function DropdownLink({ children, href, isActive }: { href: string; isActive?: boolean } & InertiaLinkProps) {
    return (
        <Menu.Item>
            {({ active }) => (
                <Link
                    href={href}
                    className={clsx(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        isActive ? 'bg-slate-100 text-slate-900' : '',
                        'block px-4 py-2 text-sm'
                    )}>
                    {children}
                </Link>
            )}
        </Menu.Item>
    );
}
