import { UserLayout } from '@/layouts/user-layout';
import { Card, CardFooter } from '@/components/card';
import { Link, usePage } from '@inertiajs/react';
import SectionTitle from '@/components/section-title';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table';
import { User } from '@/types';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/dropdown-menu';
import { Button } from '@/components/button';
import { UserMediaObject } from '@/components/user-media-object';
import { SimplePaginate } from '@/components/paginate';

export default function Index() {
    const { data: users, meta, links } = usePage<any>().props.users;
    return (
        <div>
            <Card>
                <SectionTitle title='Users' description='The list of users.' />
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='w-0'>User</TableHead>
                            {/*<TableHead>Status</TableHead>*/}
                            <TableHead>Joined</TableHead>
                            <TableHead />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.length > 0 ? (
                            <>
                                {users.map((user: User) => (
                                    <TableRow key={user.id}>
                                        <TableCell className='w-0'>
                                            <UserMediaObject user={user} />
                                        </TableCell>
                                        {/*<TableCell>*/}
                                        {/*    <Badge variant={user.status === 'Verified' ? 'default' : 'accent'}>*/}
                                        {/*        {user.status}*/}
                                        {/*    </Badge>*/}
                                        {/*</TableCell>*/}
                                        <TableCell>{user.joined}</TableCell>
                                        <TableCell>
                                            <div className='flex justify-end'>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant='ghost' className='h-8 w-8 p-0'>
                                                            <span className='sr-only'>Open menu</span>
                                                            <DotsHorizontalIcon className='h-4 w-4' />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align='end' className='w-56'>
                                                        <DropdownMenuLabel>User ID: {user.id}</DropdownMenuLabel>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem asChild>
                                                            <Link href={route('users.show', [user])}>Details</Link>
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </>
                        ) : (
                            <>
                                <TableRow>
                                    <TableCell colSpan={4} className='text-center'>
                                        No users found.
                                    </TableCell>
                                </TableRow>
                            </>
                        )}
                    </TableBody>
                </Table>

                {meta.has_pages && (
                    <CardFooter className='pt-6'>
                        <SimplePaginate links={links} meta={meta} />
                    </CardFooter>
                )}
            </Card>
        </div>
    );
}

Index.layout = (page: any) => <UserLayout title='Users' children={page} />;
