import { CheckIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const SuccessThank = () => {
  const router = useRouter();
  const { session_id } = router.query;
  const { data: session } = useSession();

  return (
    <div className="flex items-center gap-4 pb-3">
      <div className="flex-center h-11 w-11 rounded-full border-2 border-gray-800">
        <CheckIcon className="h-8 w-8" />
      </div>
      <div>
        <p className="text-sm text-gray-600">
          Order{' '}
          <span className="border-gray-800 font-medium">
            #{session_id?.slice(-5)}
          </span>
        </p>
        <h4 className="text-2xl">
          Thank you{' '}
          <span>{session ? session.user?.name?.split(' ')[0] : 'Guest'}!</span>
        </h4>
      </div>
    </div>
  );
};

export default SuccessThank;
