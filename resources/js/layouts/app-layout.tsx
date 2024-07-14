import { Toaster } from '@/components/ui/toaster'
import Footer from '@/layouts/partials/footer'
import Navbar from '@/layouts/partials/navbar'
import { PropsWithChildren } from 'react'

export function AppLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-svh bg-muted/20">
            <Toaster />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
