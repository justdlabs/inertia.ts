import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/inertia-react';
import { ProfileEditProps } from '@/type';

export default function Edit({ mustVerifyEmail, status }: ProfileEditProps) {
    return (
        <div>
            <Head title='Profile' />

            <div className='container space-y-8'>
                <div className='bg-white p-4 shadow sm:rounded-lg sm:p-8'>
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className='max-w-xl'
                    />
                </div>

                <div className='bg-white p-4 shadow sm:rounded-lg sm:p-8'>
                    <UpdatePasswordForm className='max-w-xl' />
                </div>

                <div className='bg-white p-4 shadow sm:rounded-lg sm:p-8'>
                    <DeleteUserForm className='max-w-xl' />
                </div>
            </div>
        </div>
    );
}

Edit.layout = (page: any) => <AppLayout children={page} />;
