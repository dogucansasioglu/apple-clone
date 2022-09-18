import Header from '../../navigation/header/Header';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: IPrimaryLayout) => {
  return (
    <div className="bg-color">
      <Header />
      {children}
    </div>
  );
};

export default PrimaryLayout;
