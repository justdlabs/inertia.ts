import AppLayout from '@/Layouts/AppLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import { ProfileEditProps } from '@/types';
import Container from '@/Components/Container';
import Header from '@/Components/Header';

export default function Edit({ mustVerifyEmail, status }: ProfileEditProps) {
    return (
        <div>
            <Head title='Profile' />
            <Header value='Profile'>
                Here you can update your profile information and email address, as well as your password.
            </Header>

            <Container withNoHorizontalPadding>
                <div className='grid gap-x-8 gap-y-12 sm:grid-cols-2'>
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className='max-w-xl border bg-white p-4 sm:rounded-lg sm:p-8'
                    />
                    <UpdatePasswordForm className='max-w-xl border bg-white p-4 sm:rounded-lg sm:p-8' />
                    <DeleteUserForm className='max-w-xl border bg-white p-4 sm:rounded-lg sm:p-8' />
                </div>
            </Container>
        </div>
    );
}

Edit.layout = (page: any) => <AppLayout children={page} />;
