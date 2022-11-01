import React from 'react';
import cx from 'clsx';

interface PrimaryButtonProps {
    type: 'submit' | 'button' | 'reset' | undefined;
    className?: string;
    processing?: boolean;
    children: React.ReactNode;
}

export default function PrimaryButton(args: PrimaryButtonProps) {
    const { type = 'submit', className = '', processing, children } = args;
    return (
        <button
            type={type}
            className={cx(
                className,
                'inline-flex items-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out active:bg-gray-900',
                processing && 'opacity-25'
            )}
            disabled={processing}>
            {children}
        </button>
    );
}
