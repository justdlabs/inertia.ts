import { ReactElement } from 'react';

export default function Checkbox({ ...props }): ReactElement {
    return (
        <input
            {...props}
            type='checkbox'
            className='rounded border-slate-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50'
        />
    );
}
