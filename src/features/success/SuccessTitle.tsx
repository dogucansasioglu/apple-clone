import { fadeYVariants } from '@/components/utility/motion/Variants';
import { m } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import SuccessTitleCheckIcon from './SuccessTitleCheckIcon';

export default function SuccessTitle() {
  const router = useRouter();
  // get session data
  const { data: session } = useSession();
  // get session id from router
  const { session_id } = router.query;

  return (
    <m.div className="mb-5 flex items-center gap-4" variants={fadeYVariants}>
      <SuccessTitleCheckIcon />
      <div>
        <p className="text-sm text-gray-600">Order #{session_id?.slice(-5)}</p>
        <h4 className="text-2xl">
          Thank you {session ? session.user?.name?.split(' ')[0] : 'Guest'}!
        </h4>
      </div>
    </m.div>
  );
}
