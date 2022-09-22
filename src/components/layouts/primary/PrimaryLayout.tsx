import dynamic from 'next/dynamic';
import Header from '../../navigation/header/Header';
import LazyLoad from '../../utility/lazyLoad/LazyLoad';

const DynamicFooter = dynamic(() => import('../../footer/Footer'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: IPrimaryLayout) => {
  return (
    <div className="bg-color min-h-screen">
      <Header />
      {children}
      <LazyLoad rootMargin="300px">
        <DynamicFooter />
      </LazyLoad>
    </div>
  );
};

export default PrimaryLayout;
