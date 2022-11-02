import React, { useEffect, useRef } from 'react';

interface TextInputProps {
    type?: string;
    isFocused?: boolean;
    name: string;
    value: any;
    required?: boolean;
    autoComplete?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export default function TextInput(args: TextInputProps) {
    const { type = 'text', name, value, required, isFocused, autoComplete, onChange } = args;
    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className='flex flex-col items-start'>
            <input
                ref={inputRef}
                type={type}
                name={name}
                value={value}
                required={required}
                autoComplete={autoComplete}
                onChange={onChange}
                className='w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
        </div>
    );
}
