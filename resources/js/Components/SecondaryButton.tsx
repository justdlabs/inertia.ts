import cx from 'clsx';
import React, { PropsWithChildren } from 'react';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function SecondaryButton({ children, ...props }: PropsWithChildren<Props>) {
    return (
        <button
            {...props}
            className={cx(
                'inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 shadow-sm transition focus:border-primary-300 focus:outline-none focus:ring focus:ring-primary-200 active:bg-slate-50 active:text-slate-800 hover:enabled:text-slate-500 disabled:opacity-25',
                props.className
            )}>
            {children}
        </button>
    );
}
