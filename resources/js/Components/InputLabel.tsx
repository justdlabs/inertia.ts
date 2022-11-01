import React from 'react';
import cx from 'clsx';

interface InputLabelProps {
    forInput?: string;
    value: string;
    className?: string;
    children?: React.ReactNode;
}
export default function InputLabel(args: InputLabelProps) {
    const { forInput, value, className, children } = args;
    return (
        <label htmlFor={forInput} className={cx(className, 'mb-2 block text-sm font-medium text-gray-700')}>
            {value ? value : children}
        </label>
    );
}
