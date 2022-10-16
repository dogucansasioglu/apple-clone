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
    <div className="min-h-screen bg-backdrop">
      <Header />
      {children}
      <DynamicFooter />
    </div>
  );
};

export default Layout;
