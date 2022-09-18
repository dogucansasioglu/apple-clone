import Header from '../../navigation/header/Header';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: IPrimaryLayout) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PrimaryLayout;
