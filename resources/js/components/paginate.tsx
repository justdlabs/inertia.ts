import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IconChevronLeft, IconChevronRight, IconChevronDoubleLeft, IconChevronDoubleRight } from '@irsyadadl/paranoid';

type Props = {
    only?: string[];
    links: any;
    meta: any;
    withMeta?: boolean;
    params?: any;
    setParams?: any;
};

export function SimplePagination({ params, setParams, only = [], links, meta, withMeta = true }: Props) {
    return (
        <div className='flex w-full items-center justify-between gap-x-2'>
            {withMeta && (
                <span className='hidden w-80 text-sm sm:block'>
                    Showing <strong>{meta.from}</strong> to <strong>{meta.to}</strong> of <strong>{meta.total}</strong>{' '}
                    results.
                </span>
            )}
            <div className='flex w-full items-center justify-between sm:justify-end sm:gap-x-8'>
                <strong className='text-sm lg:block hidden font-medium'>
                    Page {meta.current_page} of {meta.last_page}
                </strong>
                <div className='flex items-center w-full lg:w-auto justify-between lg:justify-end gap-x-1.5'>
                    <Select value={params?.limit} onValueChange={(e) => setParams({ ...params, limit: e })}>
                        <SelectTrigger className='w-[120px]'>
                            <SelectValue placeholder={params?.limit ?? 10} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='10'>10</SelectItem>
                            <SelectItem value='25'>25</SelectItem>
                            <SelectItem value='50'>50</SelectItem>
                            <SelectItem value='75'>75</SelectItem>
                            <SelectItem value='100'>100</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className='flex gap-x-1'>
                        {links?.prev ? (
                            <Button className='rounded-lg' variant='outline' size='icon' asChild>
                                <Link only={only} preserveState preserveScroll href={links?.first}>
                                    <IconChevronDoubleLeft className='w-5 h-5' />
                                    <span className='sr-only'>Goto first page</span>
                                </Link>
                            </Button>
                        ) : (
                            <Button className='rounded-lg' disabled variant='outline' size='icon'>
                                <span>
                                    <IconChevronLeft className='w-5 h-5' />
                                </span>
                            </Button>
                        )}

                        {links?.prev ? (
                            <Button className='rounded-lg' variant='outline' size='icon' asChild>
                                <Link only={only} preserveState preserveScroll href={links?.prev}>
                                    <IconChevronLeft className='w-5 h-5' />
                                    <span className='sr-only'>Goto previous page</span>
                                </Link>
                            </Button>
                        ) : (
                            <Button className='rounded-lg' disabled variant='outline' size='icon'>
                                <span>
                                    <IconChevronLeft className='w-5 h-5' />
                                </span>
                            </Button>
                        )}
                        {links?.next ? (
                            <Button className='rounded-lg' variant='outline' size='icon' asChild>
                                <Link only={only} preserveState preserveScroll href={links?.next}>
                                    <span className='sr-only'>Goto next page</span>
                                    <IconChevronRight className='w-5 h-5' />
                                </Link>
                            </Button>
                        ) : (
                            <Button className='rounded-lg' disabled variant='outline' size='icon'>
                                <span>
                                    <IconChevronRight className='w-5 h-5' />
                                </span>
                            </Button>
                        )}

                        {links?.next ? (
                            <Button className='rounded-lg' variant='outline' size='icon' asChild>
                                <Link only={only} preserveState preserveScroll href={links?.last}>
                                    <IconChevronDoubleRight className='w-5 h-5' />
                                    <span className='sr-only'>Goto last page</span>
                                </Link>
                            </Button>
                        ) : (
                            <Button className='rounded-lg' disabled variant='outline' size='icon'>
                                <span>
                                    <IconChevronDoubleRight className='w-5 h-5' />
                                </span>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Pagination({ only = [], links, meta }: { only?: string[]; links: any; meta: any; withMeta?: boolean }) {
    return (
        <div className='flex w-full items-center justify-center sm:gap-x-8'>
            <div className='flex items-center justify-end gap-x-1.5'>
                {links?.prev ? (
                    <Button className='rounded-lg' variant='outline' size='icon' asChild>
                        <Link only={only} preserveState preserveScroll href={links?.first}>
                            <IconChevronDoubleLeft className='w-5 h-5' />
                            <span className='sr-only'>Goto first page</span>
                        </Link>
                    </Button>
                ) : (
                    <Button className='rounded-lg' disabled variant='outline' size='icon'>
                        <span>
                            <IconChevronDoubleLeft className='w-5 h-5' />
                        </span>
                    </Button>
                )}

                {links?.prev ? (
                    <Button className='rounded-lg' variant='outline' size='icon' asChild>
                        <Link only={only} preserveState preserveScroll href={links?.prev}>
                            <IconChevronLeft className='w-5 h-5' />
                            <span className='sr-only'>Goto previous page</span>
                        </Link>
                    </Button>
                ) : (
                    <Button className='rounded-lg' disabled variant='outline' size='icon'>
                        <span>
                            <IconChevronLeft className='w-5 h-5' />
                        </span>
                    </Button>
                )}

                <strong className='mx-4 select-none text-sm font-medium'>
                    {meta.current_page} / {meta.last_page}
                </strong>
                {links?.next ? (
                    <Button className='rounded-lg' variant='outline' size='icon' asChild>
                        <Link only={only} preserveState preserveScroll href={links?.next}>
                            <span className='sr-only'>Goto next page</span>
                            <IconChevronRight className='w-5 h-5' />
                        </Link>
                    </Button>
                ) : (
                    <Button className='rounded-lg' disabled variant='outline' size='icon'>
                        <span>
                            <IconChevronRight className='w-5 h-5' />
                        </span>
                    </Button>
                )}

                {links?.next ? (
                    <Button className='rounded-lg' variant='outline' size='icon' asChild>
                        <Link only={only} preserveState preserveScroll href={links?.last}>
                            <IconChevronDoubleRight className='w-5 h-5' />
                            <span className='sr-only'>Goto last page</span>
                        </Link>
                    </Button>
                ) : (
                    <Button className='rounded-lg' disabled variant='outline' size='icon'>
                        <span>
                            <IconChevronDoubleRight className='w-5 h-5' />
                        </span>
                    </Button>
                )}
            </div>
        </div>
    );
}
