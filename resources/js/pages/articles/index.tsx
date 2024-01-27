import {UserLayout} from "@/layouts/user-layout.tsx";

export default function Index() {
    return (
        <div>
            Articles
        </div>
    );
}

Index.layout = (page: any) => <UserLayout title='Articles' children={page}/>;
