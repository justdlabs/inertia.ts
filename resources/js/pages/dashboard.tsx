import AppLayout from "@/layouts/app-layout";
import type { PagePropsData } from "@/types";
import { Head } from "@inertiajs/react";
import { Card, Container } from "ui";

export default function Dashboard({ auth }: PagePropsData) {
    return (
        <>
            <Head title="Dashboard" />

            <Container className="py-12">
                <Card className="w-full p-6">Hello, {auth.user.name}!</Card>
            </Container>
        </>
    );
}

Dashboard.layout = (page: any) => <AppLayout children={page} />;
