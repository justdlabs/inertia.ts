import DeleteUserForm from '@/pages/profile/partials/delete-user-form';
import UpdatePasswordForm from '@/pages/profile/partials/update-password-form';
import UpdateProfileInformationForm from '@/pages/profile/partials/update-profile-information-form';
import { UserLayout } from '@/layouts/user-layout';

interface Props {
    mustVerifyEmail: boolean;
    status?: string;
}

export default function Edit({ mustVerifyEmail, status }: Props) {
    return (
        <>
            <div className='max-w-2xl space-y-6'>
                <UpdateProfileInformationForm mustVerifyEmail={mustVerifyEmail} status={status} />
                <UpdatePasswordForm />
                <DeleteUserForm />
            </div>
        </>
    );
}

Edit.layout = (page: any) => <UserLayout title='Settings' children={page} />;
