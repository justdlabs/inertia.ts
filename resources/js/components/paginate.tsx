import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

export function Paginate({
    meta,
    links,
}: {
    meta: {
        from: number;
        to: number;
        total: number;
        links: {
            label: string;
            url: string | null;
            active: boolean;
        }[];
    };
    links: {
        prev: string | null;
        next: string | null;
    };
}) {
    return (
        <Pagination className='mt-6'>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious as='button' disabled={links.prev === null} href={links?.prev ?? ''} />
                </PaginationItem>
                {meta.links.map((link: any, index: number) => {
                    if (link.label === '...') {
                        return (
                            <PaginationItem key={index}>
                                <PaginationEllipsis />
                            </PaginationItem>
                        );
                    } else if (link.label !== 'Previous' && link.label !== 'Next') {
                        return (
                            <PaginationItem key={index}>
                                <PaginationLink href={link.url} isActive={link.active}>
                                    {link.label}
                                </PaginationLink>
                            </PaginationItem>
                        );
                    }
                    return null;
                })}
                <PaginationItem>
                    <PaginationNext as='button' disabled={links.next === null} href={links?.next ?? ''} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
