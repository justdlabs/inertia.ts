import {UserLayout} from '@/layouts/user-layout';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {usePage} from '@inertiajs/react';
import SectionTitle from '@/components/section-title';
import {User} from '@/types';
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {Badge} from '@/components/ui/badge';
import {Paginate} from "@/components/paginate.tsx";

export default function Index() {
    const {data: users, meta, links} = usePage<any>().props.users;
    return (
        <div>
            <SectionTitle className='p-0 mb-6' title='Users' description='The list of users.'/>
            <Card>
                <CardHeader className='border-b'>
                    <CardTitle>
                        Users
                    </CardTitle>
                    <CardDescription>
                        The list of users.
                    </CardDescription>
                </CardHeader>
                <CardContent className='p-0'>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-0">#</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Registered at</TableHead>
                                <TableHead>Verified</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.length > 0 ? users.map((user: User, i: number) => (
                                <TableRow>
                                    <TableCell className="font-medium">{meta.from + i}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.joined}</TableCell>
                                    <TableCell>
                                        <Badge variant={user.status === 'Verified' ? 'default' : 'secondary'}>
                                            {user.status}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            )) : (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center">
                                        No users found.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {meta.has_pages && (
                <Paginate meta={meta} links={links}/>
            )}
        </div>
    );
}

Index.layout = (page: any) => <UserLayout title='Users' children={page}/>;
