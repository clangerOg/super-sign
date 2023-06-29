import { NavBar } from '@/components/nav-bar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
