import cx from 'clsx';
import React, { PropsWithChildren } from 'react';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function DangerButton({ children, ...props }: PropsWithChildren<Props>) {
    return (
        <button
            {...props}
            className={cx(
                'inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 font-medium text-white transition focus:border-red-500 focus:outline-none focus:ring focus:ring-red-300 active:bg-red-500 hover:enabled:bg-red-500 disabled:opacity-25',
                props.className
            )}>
            {children}
        </button>
    );
}
