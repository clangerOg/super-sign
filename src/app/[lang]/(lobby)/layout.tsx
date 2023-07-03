import { Container } from '@/components/container';
import { Shell } from '@/components/shell';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Shell className="border-b">
        <Container className="flex h-16 items-center">
          <Link href="/" className="text-2xl font-semibold">
            <p>SuperSign</p>
          </Link>
          <nav className={cn('mx-6 flex items-center space-x-4 lg:space-x-6')}>
            <Link
              href="/examples/dashboard"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Overview
            </Link>
            <Link
              href="/examples/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Customers
            </Link>
            <Link
              href="/examples/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Products
            </Link>
            <Link
              href="/examples/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Settings
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <p>User</p>
          </div>
        </Container>
      </Shell>

      {children}
    </>
  );
}
