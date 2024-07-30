import Footer from '@/layouts/partials/footer'
import Navbar from '@/layouts/partials/navbar'
import { PropsWithChildren } from 'react'
import { Toast } from 'ui'

export function AppLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-svh bg-muted/20">
            <Toast />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
