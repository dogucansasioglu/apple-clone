import Footer from '../../footer/Footer';
import Header from '../../navigation/header/Header';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: IPrimaryLayout) => {
  return (
    <div className="bg-color min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PrimaryLayout;
