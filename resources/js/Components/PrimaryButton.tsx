import React from 'react';
import cx from 'clsx';

interface PrimaryButtonProps {
    type?: 'submit' | 'button' | 'reset' | undefined;
    className?: string;
    processing?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}

export default function PrimaryButton(args: PrimaryButtonProps) {
    const { type = 'submit', className = '', processing, children, ...props } = args;
    return (
        <button
            {...props}
            type={type}
            className={cx(
                className,
                'inline-flex items-center rounded-md border border-transparent bg-blue-700 px-4 py-2 font-medium text-white transition duration-150 ease-in-out active:bg-blue-600',
                processing && 'opacity-25'
            )}
            disabled={processing}>
            {children}
        </button>
    );
}
