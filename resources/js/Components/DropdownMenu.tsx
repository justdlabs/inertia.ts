import React from 'react';
import { InertiaLink, InertiaLinkProps } from '@inertiajs/inertia-react';
import { Menu, Transition } from '@headlessui/react';
import cx from 'clsx';

interface DropdownMenuProps {
    children: React.ReactNode;
    trigger?: JSX.Element | string;
    triggerWithMenuIcon?: boolean;
}

const DropdownMenu = ({ children, trigger, triggerWithMenuIcon = false }: DropdownMenuProps) => {
    return (
        <Menu as='div' className='relative'>
            {({ open }) => (
                <>
                    <Menu.Button className={cx('focus:outline-none')}>
                        {triggerWithMenuIcon ? (
                            <IconMenu />
                        ) : (
                            <div className='flex items-center gap-x-2 '>
                                {trigger}
                                <IconChevronDown className={cx(open && 'rotate-180', 'h-4 w-4 transition')} />
                            </div>
                        )}
                    </Menu.Button>
                    <Transition
                        show={open}
                        enter='transition duration-100 ease-out'
                        enterFrom='transform scale-95 opacity-0'
                        enterTo='transform scale-100 opacity-100'
                        leave='transition duration-75 ease-out'
                        leaveFrom='transform scale-100 opacity-100'
                        leaveTo='transform scale-95 opacity-0'>
                        <Menu.Items static>
                            <div className='absolute top-2 right-0 w-56 divide-y rounded-md border bg-white py-1 shadow-sm'>
                                {children}
                            </div>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    );
};

const Link = (args: InertiaLinkProps) => {
    const { href, children, ...props } = args;
    return (
        <Menu.Item>
            <InertiaLink {...props} className={cx('flex w-full gap-x-2 py-1.5 px-4 text-left')} href={href}>
                {children}
            </InertiaLink>
        </Menu.Item>
    );
};

export const IconChevronDown = ({ className }: { className: string }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        width={16}
        height={16}
        viewBox='0 0 24 24'
        strokeWidth={2}
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <polyline points='6 9 12 15 18 9' />
    </svg>
);
export const IconMenu = ({ className }: { className?: string }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        width={24}
        height={24}
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <line x1={4} y1={6} x2={20} y2={6} />
        <line x1={4} y1={12} x2={20} y2={12} />
        <line x1={4} y1={18} x2={20} y2={18} />
    </svg>
);

DropdownMenu.Link = Link;

export default DropdownMenu;
