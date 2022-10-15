import dynamic from 'next/dynamic';
import { Header } from 'src/features/header';

const DynamicFooter = dynamic(() => import('../../footer/Footer'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: IPrimaryLayout) => {
  return (
    <div className="bg-ws min-h-screen">
      <Header />
      {children}
      <DynamicFooter />
    </div>
  );
};

export default PrimaryLayout;
