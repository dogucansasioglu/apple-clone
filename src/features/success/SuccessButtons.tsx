import PrimaryButton from '@/components/buttons/PrimaryButton';
import SecondaryButton from '@/components/buttons/SecondaryButton';
import { useRouter } from 'next/router';

export default function SuccessButtons() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between text-sm">
      <p>
        Need help?{' '}
        <SecondaryButton withBorder={true} className="font-medium">
          Contact us!
        </SecondaryButton>
      </p>

      <PrimaryButton
        onClick={() => router.push('/')}
        className="px-6 py-3.5 text-sm font-semibold"
      >
        <span>Continue Shopping</span>
      </PrimaryButton>
    </div>
  );
}
