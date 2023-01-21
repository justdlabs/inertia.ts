import { Page } from '@inertiajs/core';
import { usePage } from '@inertiajs/react';
import { InertiaSharedProps } from '@/types';
import { PageProps } from '@inertiajs/core/types/types';

export default function useTypedPage<T extends PageProps = PageProps>(): Page<T & InertiaSharedProps> {
    const page = usePage();
    return page as Page<T & InertiaSharedProps>;
}
