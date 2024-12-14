import { FlashMessage } from 'components/flash-message';
import { Logo } from 'components/logo';
import { Card } from 'components/ui/card';
import { PropsWithChildren, ReactNode } from 'react';
import { Link } from 'ui';

interface GuestLayoutProps {
  header?: string | null;
  description?: string | ReactNode | null;
}

export function GuestLayout({ description = null, header = null, children }: PropsWithChildren<GuestLayoutProps>) {
  return (
    <div className="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
      <FlashMessage />
      <Link href={route('home')}>
        <Logo className="mx-auto size-8" />
      </Link>

      <div className="mt-10 w-full max-w-lg">
        <Card className="rounded-none border-l-transparent border-r-transparent shadow-none sm:rounded-lg sm:border-l-border sm:border-r-border sm:shadow-sm lg:rounded-xl ">
          <Card.Header className="flex-row justify-between">
            <div>
              <Card.Title>{header}</Card.Title>
              <Card.Description className="mt-2">{description}</Card.Description>
            </div>
          </Card.Header>
          <Card.Content>{children}</Card.Content>
        </Card>
      </div>
    </div>
  );
}
