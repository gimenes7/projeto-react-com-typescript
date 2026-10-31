import type { ReactNode } from 'react';
import Header from '../organisms/Header';

interface PageLayoutProps {
  titulo: string;
  larguraMax?: number;
  children: ReactNode;
}

const PageLayout = ({ titulo, larguraMax = 600, children }: PageLayoutProps) => (
  <>
    <Header />
    <main style={{ maxWidth: larguraMax, margin: '32px auto', padding: '0 20px' }}>
      <h1 style={{ textAlign: 'center' }}>{titulo}</h1>
      {children}
    </main>
  </>
);

export default PageLayout;
