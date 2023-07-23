import { PaginateProps } from '@/types';
import { Link } from '@inertiajs/react';
import {
    IconSquareChevronLeftFilled,
    IconSquareChevronRightFilled, IconSquareRoundedChevronLeftFilled,
    IconSquareRoundedChevronRightFilled,
} from '@tabler/icons-react';

export function SimplePaginate({ links, meta }: PaginateProps<object>) {
    return (
        <div className='flex w-full items-center justify-center sm:justify-between'>
            <div className='hidden sm:block text-muted-foreground'>
                Showing {meta.from} to {meta.to} of {meta.total} entries
            </div>
            <div className='flex items-center gap-x-1'>
                {links.prev !== null ? (
                    <Link preserveScroll preserveState href={links.prev}>
                        <IconSquareRoundedChevronLeftFilled className='h-8 w-8' />
                    </Link>
                ) : (
                    <span>
                        <IconSquareRoundedChevronLeftFilled className='text-accent h-8 w-8' />
                    </span>
                )}
                {links.next !== null ? (
                    <Link preserveScroll preserveState href={links.next}>
                        <IconSquareRoundedChevronRightFilled className='h-8 w-8' />
                    </Link>
                ) : (
                    <span>
                        <IconSquareRoundedChevronRightFilled className='text-accent h-8 w-8' />
                    </span>
                )}
            </div>
        </div>
    );
}
