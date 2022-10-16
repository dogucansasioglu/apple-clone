import Header from '@/features/header';
import dynamic from 'next/dynamic';

const DynamicFooter = dynamic(() => import('@/components/footer/Footer'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: IPrimaryLayout) => {
  return (
    <div className="min-h-screen bg-backdrop">
      <Header />
      {children}
      <DynamicFooter />
    </div>
  );
};

export default PrimaryLayout;
