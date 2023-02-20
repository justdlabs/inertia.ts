import cx from 'clsx';
import React, { forwardRef } from 'react';

const TextInput = forwardRef<
    HTMLInputElement,
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
>((props, ref) => (
    <input
        {...props}
        type={props.type || 'text'}
        ref={ref}
        className={cx(
            'w-full rounded-md border-slate-300 text-slate-800 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50',
            props.className
        )}
    />
));

export default TextInput;
