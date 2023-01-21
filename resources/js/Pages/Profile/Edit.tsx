import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import { ProfileEditProps } from '@/types';

export default function Edit({ mustVerifyEmail, status }: ProfileEditProps) {
    return (
        <div>
            <Head title='Profile' />
            <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
                <div className='grid gap-8 sm:grid-cols-2'>
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className='max-w-xl bg-white p-4 shadow sm:rounded-lg sm:p-8'
                    />
                    <UpdatePasswordForm className='max-w-xl bg-white p-4 shadow sm:rounded-lg sm:p-8' />
                    <DeleteUserForm className='max-w-xl bg-white p-4 shadow sm:rounded-lg sm:p-8' />
                </div>
            </div>
        </div>
    );
}

Edit.layout = (page: any) => <AppLayout children={page} />;
