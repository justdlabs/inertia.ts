import { UserLayout } from '@/layouts/user-layout.tsx';

export default function Index() {
    return <div>Categories</div>;
}

Index.layout = (page: any) => <UserLayout title='Categories' children={page} />;
