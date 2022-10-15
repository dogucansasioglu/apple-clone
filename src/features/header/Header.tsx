import LogoButton from '@/components/buttons/LogoButton';
import HeaderLinks from './HeaderLinks';

export default function Header() {
  return (
    <header className="bg-backdrop sticky top-0 z-50 w-full p-5">
      <nav className="container mx-auto flex items-center justify-between">
        <LogoButton location="header" />
        <HeaderLinks />
      </nav>
    </header>
  );
}
