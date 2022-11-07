import React, { useEffect, useRef } from 'react';

interface TextInputProps {
    id?: string;
    type?: string;
    isFocused?: boolean;
    className?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    autoComplete?: string;
    name?: string;
    placeholder?: string;
    keydown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    keyup?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    keypress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    readonly?: boolean;
    maxlength?: number;
    disabled?: boolean;
}

export default function TextInput(args: TextInputProps) {
    const { type = 'text', isFocused } = args;
    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className='flex flex-col items-start'>
            <input
                {...args}
                ref={inputRef}
                type={type}
                className='w-full rounded-md border-slate-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50'
            />
        </div>
    );
}
