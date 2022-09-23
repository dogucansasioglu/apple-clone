import { useAutoAnimate } from '@formkit/auto-animate/react';
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/future/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { basketLength } from '../../../../store/basketSlice';

const HeaderIcons = () => {
  const { data: session } = useSession();
  const length = useSelector(basketLength);
  const [parent] = useAutoAnimate<HTMLDivElement>();

  return (
    <div className="flex items-center justify-center gap-x-5">
      <Link href="/checkout">
        <div className="relative cursor-pointer" ref={parent}>
          {length > 0 && (
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 absolute -right-1 -top-1 z-50 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white">
              {length}
            </span>
          )}
          <ShoppingBagIcon className="transition-all duration-300 ease-in-out h-8 w-8 cursor-pointer text-gray-800 hover:text-violet-500" />
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
        <UserIcon
          className="transition-all duration-300 ease-in-out h-8 w-8 cursor-pointer text-gray-800 hover:text-violet-500"
          onClick={() => signIn()}
        />
      )}
    </div>
  );
};

export default HeaderIcons;
