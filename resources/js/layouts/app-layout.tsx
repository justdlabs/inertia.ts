import { FlashMessage } from '@/components/flash-message';
import { Footer } from '@/components/footer';
import { AppNavbar } from '@/layouts/app-navbar';
import { PropsWithChildren } from 'react';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <FlashMessage />
      <AppNavbar>{children}</AppNavbar>
      <Footer />
    </div>
  );
}
