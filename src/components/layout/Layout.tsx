import Header from '@/components/header';
import dynamic from 'next/dynamic';

const DynamicFooter = dynamic(() => import('@/components/footer'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className="flex min-h-screen flex-col bg-backdrop">
      <Header />
      <div className="flex-auto">{children}</div>
      <DynamicFooter />
    </div>
  );
};

export default Layout;
