import { UserLayout } from '@/layouts/user-layout';
import { User } from '@/types';
import { useForm } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { InputError } from '@/components/input-error';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.tsx';

interface Props {
    user: User;
}

export default function Form({ user }: Props) {
    const { put, data, setData, processing, errors } = useForm({
        name: user?.name ?? '',
        email: user?.email ?? '',
    });

    function update(e: { preventDefault: () => void }) {
        e.preventDefault();

        put(route('users.update', [user]));
    }

    function onChange(event: {
        target: {
            name: any;
            value: any;
        };
    }) {
        setData(event.target.name, event.target.value);
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Update User</CardTitle>
                <CardDescription>Update user information.</CardDescription>
            </CardHeader>
            <CardContent className='max-w-2xl'>
                <form onSubmit={update} className='space-y-6'>
                    <div>
                        <Label htmlFor='name'>Name</Label>

                        <Input
                            type='text'
                            name='name'
                            value={data.name}
                            className='mt-1'
                            autoComplete='name'
                            autoFocus
                            onChange={onChange}
                            required
                        />

                        <InputError message={errors.name} className='mt-2' />
                    </div>

                    <div className='mt-4'>
                        <Label htmlFor='email'>Email</Label>

                        <Input
                            type='email'
                            name='email'
                            value={data.email}
                            className='mt-1'
                            autoComplete='username'
                            onChange={onChange}
                            required
                        />

                        <InputError message={errors.email} className='mt-2' />
                    </div>

                    <Button disabled={processing}>Update</Button>
                </form>
            </CardContent>
        </Card>
    );
}

Form.layout = (page: any) => <UserLayout title={`Edit user: ${page.props.user.name}`} children={page} />;
