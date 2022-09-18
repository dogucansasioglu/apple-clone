import { signIn, signOut, useSession } from 'next-auth/react'; // TODO: dynamic import signIn and SignOut
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../../../store/basketSlice';
import HeaderIcons from './icons/HeaderIcons';
import HeaderLogo from './logo/HeaderLogo';

const Header = () => {
  const { data: session } = useSession();
  const items = useSelector(selectBasketItems);

  return (
    <header className="flex-center bg-color sticky top-0 z-50 p-5 px-8">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <HeaderLogo />
        <HeaderIcons
          items={items}
          session={session}
          signIn={signIn}
          signOut={signOut}
        />
      </div>
    </header>
  );
};

export default Header;
