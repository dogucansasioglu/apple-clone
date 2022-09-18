import { ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';
import { signIn, signOut, useSession } from 'next-auth/react'; // TODO: dynamic import signIn and SignOut
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../../../store/basketSlice';

const Header = () => {
  const { data: session } = useSession();
  const items = useSelector(selectBasketItems);

  return (
    <header className="flex-center sticky top-0 z-50 bg-[#e7ecee] p-5">
      <div className="flex w-full max-w-7xl items-center justify-between px-2">
        <div className="flex-center">
          <Link href="/">
            <div className="relative h-12 w-7 cursor-pointer opacity-75 transition hover:opacity-100">
              <Image
                src="/logo.png"
                layout="fill"
                objectFit="contain"
                alt="apple clone logo"
              />
            </div>
          </Link>
        </div>
        <div className="flex-center gap-x-5">
          <Link href="/checkout">
            {/* TODO: fix animation  */}
            <div className="relative cursor-pointer">
              {items.length > 0 && (
                <span className="bg-gradient-pink-violet font-white absolute -right-1 -top-1 z-50 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white">
                  {items.length}
                </span>
              )}
              <ShoppingBagIcon className="headerIcon" />
            </div>
          </Link>

          {session ? (
            <Image
              src={session?.user?.image as string}
              alt="signed in user image"
              className="cursor-pointer rounded-full"
              width={32}
              height={32}
              onClick={() => signOut()}
            />
          ) : (
            <UserIcon className="headerIcon" onClick={() => signIn()} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
