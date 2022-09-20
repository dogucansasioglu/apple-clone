import { ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';
import { Session } from 'next-auth/core/types';
import Image from 'next/image';
import Link from 'next/link';

export interface IHeaderIcons {
  length: number;
  session: Session | null;
  signIn: () => void;
  signOut: () => void;
}

const HeaderIcons = ({ length, session, signIn, signOut }: IHeaderIcons) => {
  return (
    <div className="flex-center gap-x-5">
      <Link href="/checkout">
        {/* TODO: fix animation  */}
        <div className="relative cursor-pointer">
          {length > 0 && (
            <span className="bg-gpv5 font-white absolute -right-1 -top-1 z-50 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white">
              {length}
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
  );
};

export default HeaderIcons;
