import { UserLayout } from '@/layouts/user-layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, usePage } from '@inertiajs/react';
import SectionTitle from '@/components/section-title';
import { User } from '@/types';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Index() {
    const { data: users, meta, links } = usePage<any>().props.users;
    return (
        <div>
            <SectionTitle className='p-0 mb-6' title='Users' description='The list of users.' />
            {users.length > 0 ? (
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {users.map((user: User) => (
                        <Card className='flex flex-col' key={Math.random()}>
                            <CardHeader>
                                <CardTitle className='text-base'>{user.name}</CardTitle>
                                <CardDescription>Joined at {user.joined}</CardDescription>
                            </CardHeader>
                            <CardContent></CardContent>
                            <CardFooter className='justify-between'>
                                <Badge variant={user.status === 'Verified' ? 'default' : 'secondary'}>
                                    {user.status}
                                </Badge>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant='ghost' className='h-8 w-8 p-0'>
                                            <span className='sr-only'>Open menu</span>
                                            <DotsHorizontalIcon className='size-5' />
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
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            ) : (
                <Card>
                    <CardDescription className='text-center'>No users found.</CardDescription>
                </Card>
            )}
        </div>
    );
}

Index.layout = (page: any) => <UserLayout title='Users' children={page} />;
