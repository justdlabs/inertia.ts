import cx from 'clsx';
import React, { PropsWithChildren } from 'react';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function PrimaryButton({ children, ...props }: PropsWithChildren<Props>) {
    return (
        <button
            {...props}
            className={cx(
                'inline-flex items-center rounded-md border border-transparent bg-slate-900 px-4 py-2 font-medium text-white transition focus:border-slate-800 focus:outline-none focus:ring focus:ring-blue-300 active:bg-slate-800 hover:enabled:bg-slate-800 disabled:opacity-25',
                props.className
            )}>
            {children}
        </button>
    );
}
