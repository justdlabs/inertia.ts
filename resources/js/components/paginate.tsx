import { PaginateProps } from '@/types';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/button';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

export function SimplePaginate({ links, meta }: PaginateProps<object>) {
    return (
        <div className='flex w-full items-center justify-center sm:justify-between'>
            <div className='hidden sm:block'>
                Showing {meta.from} to {meta.to} of {meta.total} entries
            </div>
            <div className='flex items-center gap-x-2'>
                {links.prev !== null ? (
                    <Button size='icon' asChild>
                        <Link preserveScroll preserveState href={links.prev}>
                            <ChevronLeftIcon />
                        </Link>
                    </Button>
                ) : (
                    <Button disabled size='icon' asChild>
                        <span>
                            <ChevronLeftIcon />
                        </span>
                    </Button>
                )}
                {links.next !== null ? (
                    <Button size='icon' asChild>
                        <Link preserveScroll preserveState href={links.next}>
                            <ChevronRightIcon />
                        </Link>
                    </Button>
                ) : (
                    <Button disabled size='icon' asChild>
                        <span>
                            <ChevronRightIcon />
                        </span>
                    </Button>
                )}
            </div>
        </div>
    );
}
