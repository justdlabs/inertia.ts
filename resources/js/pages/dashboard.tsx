import { PagePropsData } from '@/types/index'
import { Head } from '@inertiajs/react'
import { Container } from 'components/container'
import { AppLayout } from 'layouts'
import { Card } from 'ui'

export default function Dashboard({ auth }: PagePropsData) {
    return (
        <>
            <Head title="Dashboard" />

            <Container className="py-12">
                <Card className="p-6 max-w-md">Hello, {auth.user.name}!</Card>
            </Container>
        </>
    )
}

Dashboard.layout = (page: any) => <AppLayout children={page} />
