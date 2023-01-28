import { ReactNode } from 'react';
import cx from 'clsx';

interface InputLabelProps {
    forInput?: string;
    value?: string;
    className?: string;
    children?: ReactNode;
}
export default function InputLabel(args: InputLabelProps) {
    const { forInput, value, className, children } = args;
    return (
        <label htmlFor={forInput} className={cx(className, 'mb-2 block text-sm font-medium text-slate-700')}>
            {value ? value : children}
        </label>
    );
}
