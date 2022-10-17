import UserIcon from '@heroicons/react/24/outline/UserIcon';
import { motion } from 'framer-motion';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/future/image';
import { fadeYVariants } from '../utility/motion/Variants';

export default function HeaderUserButton() {
  const { data: session } = useSession();

  return (
    <motion.div variants={fadeYVariants}>
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
          className="h-8 w-8 cursor-pointer text-gray-800 transition-all duration-300 ease-in hover:text-violet-500"
          onClick={() => signIn()}
        />
      )}
    </motion.div>
  );
}
