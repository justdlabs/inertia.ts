import { UserLayout } from '@/layouts/user-layout';
import { User } from '@/types';
import { UserMediaObject } from '@/components/user-media-object';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useForm } from '@inertiajs/react';
import { toast } from '@/hooks/use-toast';

export default function Show({ user }: { user: User }) {
    const formDelete = useForm();

    function deleteUser() {
        return () =>
            formDelete.delete(route('users.destroy', [user]), {
                onSuccess: () =>
                    toast({
                        title: 'User deleted',
                        description: 'User has been deleted.',
                    }),
            });
    }

    return (
        <div>
            <Card>
                <CardContent>
                    <CardHeader className='px-0'>
                        <UserMediaObject user={user} />
                    </CardHeader>
                    <div className='space-y-6'>
                        <div className='flex flex-col gap-y-1'>
                            <span>User</span>
                            <span>{user.name}</span>
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <span>Joined</span>
                            <span>{user.joined}</span>
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <span>Status</span>
                            <span>{user.status}</span>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant='destructive'>Delete this Account</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete user from our servers.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={deleteUser()}>Yes, Delete</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </CardFooter>
            </Card>
        </div>
    );
}
Show.layout = (page: any) => <UserLayout title='Users' children={page} />;
