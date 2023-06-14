import AppLayout from '@/Layouts/AppLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import Container from '@/Components/Container';
import Header from '@/Components/Header';

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
