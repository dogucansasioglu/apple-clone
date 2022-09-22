import HeaderIcons from './icons/HeaderIcons';
import HeaderLogo from './logo/HeaderLogo';

const Header = () => {
  return (
    <header className="flex-center bg-color sticky top-0 z-40 p-5 px-8">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <HeaderLogo />
        <HeaderIcons />
      </div>
    </header>
  );
};

export default Header;
