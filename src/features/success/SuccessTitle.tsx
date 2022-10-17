import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import SuccessTitleCheckIcon from './SuccessTitleCheckIcon';

export default function SuccessTitle() {
  const router = useRouter();
  // get session id from router
  const { session_id } = router.query;
  // get session data
  const { data: session } = useSession();

  return (
    <div className="mb-5 flex items-center gap-4">
      <SuccessTitleCheckIcon />
      <div>
        <p className="text-sm text-gray-600">Order #{session_id?.slice(-5)}</p>
        <h4 className="text-2xl">
          Thank you {session ? session.user?.name?.split(' ')[0] : 'Guest'}!
        </h4>
      </div>
    </div>
  );
}
