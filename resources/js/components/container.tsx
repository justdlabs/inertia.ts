import { ReactNode } from 'react';
import clsx from 'clsx';

export default function Container({
    withNoHorizontalPadding = false,
    children,
}: {
    withNoHorizontalPadding?: boolean;
    children: ReactNode;
}) {
    return (
        <div
            className={clsx(
                'mx-auto max-w-7xl py-4 sm:px-6 sm:py-10 lg:px-8',
                withNoHorizontalPadding ? null : 'px-4 sm:px-0'
            )}>
            {children}
        </div>
    );
}
