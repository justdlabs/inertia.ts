import { ReactNode } from 'react';

export default function Header({ children }: { children: ReactNode }) {
    return (
        <header className='bg-white shadow'>
            <div className='mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8'>
                <h2 className='text-xl font-semibold leading-tight text-gray-800'>{children}</h2>
            </div>
        </header>
    );
}
