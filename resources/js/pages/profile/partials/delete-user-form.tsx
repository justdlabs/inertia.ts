import React, { useRef, useState } from 'react';
import { Button, buttonVariants } from '@/components/button';
import { InputError } from '@/components/input-error';
import { Input } from '@/components/input';
import { useForm } from '@inertiajs/react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/dialog';
import clsx from 'clsx';
import SectionTitle from '@/components/section-title';
import { Card, CardContent } from '@/components/card';

export default function DeleteUserForm({ className }: { className?: string }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);
    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        reset();
    };

    return (
        <Card>
            <SectionTitle
                title='Delete Account'
                description='Once your account is deleted, all of its resources and data will be permanently deleted. Before
                    deleting your account, please download any data or information that you wish to retain.'
            />
            <CardContent>
                <Dialog>
                    <DialogTrigger
                        className={buttonVariants({
                            variant: 'destructive',
                        })}>
                        Delete Account
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Delete Account</DialogTitle>
                            <DialogDescription>
                                Are you sure you want to delete your account? Once your account is deleted, all of its
                                resources and data will be permanently deleted. Please enter your password to confirm
                                you would like to permanently delete your account.
                            </DialogDescription>
                        </DialogHeader>

                        <div className='mt-4'>
                            <Input
                                type='password'
                                placeholder='Password'
                                value={data.password}
                                onChange={(e) => setData('password', e.currentTarget.value)}
                            />

                            <InputError message={errors.password} className='mt-2' />
                        </div>
                        <DialogFooter>
                            <Button
                                variant='destructive'
                                onClick={deleteUser}
                                className={clsx('ml-2', { 'opacity-25': processing })}
                                disabled={processing}>
                                Delete Account
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    );
}
