import React from 'react';

export default function Checkbox({ ...props }): React.ReactElement {
    return (
        <input
            {...props}
            type='checkbox'
            className='rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
        />
    );
}
