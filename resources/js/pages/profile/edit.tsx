import AppLayout from '@/layouts/app-layout';
import DeleteUserForm from '@/pages/profile/partials/delete-user-form';
import UpdatePasswordForm from '@/pages/profile/partials/update-password-form';
import UpdateProfileInformationForm from '@/pages/profile/partials/update-profile-information-form';
import { Head } from '@inertiajs/react';
import Container from '@/components/container';
import Header from '@/components/header';

interface Props {
    mustVerifyEmail: boolean;
    status?: string;
}

export default function Edit({ mustVerifyEmail, status }: Props) {
    return (
        <div>
            <Head title='Profile' />
            <Header
                title='Profile'
                description='Here you can update your profile information and email address, as well as your password.'
            />

            <Container>
                <div className='grid gap-x-8 gap-y-12 sm:grid-cols-2'>
                    <UpdateProfileInformationForm mustVerifyEmail={mustVerifyEmail} status={status} />
                    <UpdatePasswordForm />
                    <DeleteUserForm />
                </div>
            </Container>
        </div>
    );
}

Edit.layout = (page: any) => <AppLayout children={page} />;
