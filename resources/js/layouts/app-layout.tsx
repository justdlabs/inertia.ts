import { AppNavbar } from '@/layouts/app-navbar';
import { FlashMessage } from 'components/flash-message';
import { Footer } from 'components/footer';
import { PropsWithChildren } from 'react';

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <FlashMessage />
      <AppNavbar>{children}</AppNavbar>
      <Footer />
    </div>
  );
}
