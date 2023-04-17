import { ReactNode } from 'react';
import Container from '@/Components/Container';

export default function Header({ value, children }: { value?: ReactNode; children?: ReactNode }) {
    return (
        <div className='border-b border-slate-200 bg-slate-50 py-16 px-6 lg:px-8'>
            <Container>
                <div className='max-w-xl'>
                    <h2 className='text-4xl font-bold tracking-tight text-slate-800 sm:text-6xl'>{value}</h2>
                    <p className='mt-6 text-lg leading-8 text-gray-500'>{children}</p>
                </div>
            </Container>
        </div>
    );
}
