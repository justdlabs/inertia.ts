import { UserLayout } from '@/layouts/user-layout';

export default function Index() {
    return <div>Articles</div>;
}

Index.layout = (page: any) => <UserLayout title='Articles' children={page} />;
