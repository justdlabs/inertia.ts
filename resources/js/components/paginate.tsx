import { PaginateProps } from '@/types';
import { Link } from '@inertiajs/react';
import { IconSquareRoundedChevronLeftFilled, IconSquareRoundedChevronRightFilled } from '@tabler/icons-react';

export function SimplePaginate({ links, meta }: PaginateProps<object>) {
    return (
        <div className='flex w-full items-center justify-center sm:justify-between'>
            <div className='hidden text-muted-foreground sm:block'>
                Showing {meta.from} to {meta.to} of {meta.total} entries
            </div>
            <div className='flex items-center gap-x-1'>
                {links.prev !== null ? (
                    <Link preserveScroll preserveState href={links.prev}>
                        <IconSquareRoundedChevronLeftFilled className='h-8 w-8' />
                    </Link>
                ) : (
                    <span>
                        <IconSquareRoundedChevronLeftFilled className='h-8 w-8 text-accent' />
                    </span>
                )}
                {links.next !== null ? (
                    <Link preserveScroll preserveState href={links.next}>
                        <IconSquareRoundedChevronRightFilled className='h-8 w-8' />
                    </Link>
                ) : (
                    <span>
                        <IconSquareRoundedChevronRightFilled className='h-8 w-8 text-accent' />
                    </span>
                )}
            </div>
        </div>
    );
}
