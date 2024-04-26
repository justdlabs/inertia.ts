import { UserLayout } from '@/layouts/user-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, usePage } from '@inertiajs/react';
import SectionTitle from '@/components/section-title';
import { User } from '@/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Paginate } from '@/components/paginate';
import { IconDotsVertical, IconEye, IconHighlight } from '@irsyadadl/paranoid';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Index() {
    const { data: users, meta, links } = usePage<any>().props.users;
    return (
        <div>
            <SectionTitle className='p-0 mb-6' title='Users' description='The list of users.' />
            <Card>
                <CardHeader className='border-b'>
                    <CardTitle>Users</CardTitle>
                    <CardDescription>The list of users.</CardDescription>
                </CardHeader>
                <CardContent className='p-0'>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className='w-0'>#</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Registered at</TableHead>
                                <TableHead>Verified</TableHead>
                                <th />
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.length > 0 ? (
                                users.map((user: User, i: number) => (
                                    <TableRow>
                                        <TableCell className='font-medium'>{meta.from + i}</TableCell>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.joined}</TableCell>
                                        <TableCell>
                                            <Badge variant={user.status === 'verified' ? 'default' : 'secondary'}>
                                                {user.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <div className='justify-end flex'>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger>
                                                        <IconDotsVertical className='size-4' />
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align='end' className='w-56'>
                                                        <DropdownMenuLabel>User ID: {user.id}</DropdownMenuLabel>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem asChild>
                                                            <Link href={route('users.show', [user])}>
                                                                <IconEye className='size-4 mr-2' />
                                                                View
                                                            </Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem asChild>
                                                            <Link href={route('users.edit', [user])}>
                                                                <IconHighlight className='size-4 mr-2' />
                                                                Edit
                                                            </Link>
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={5} className='text-center'>
                                        No users found.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {meta.has_pages && <Paginate meta={meta} links={links} />}
        </div>
    );
}

Index.layout = (page: any) => <UserLayout title='Users' children={page} />;
