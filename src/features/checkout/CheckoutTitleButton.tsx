import PrimaryButton from '@/components/buttons/PrimaryButton';
import { useRouter } from 'next/router';

export interface ICheckoutTitleButton {
  length: number;
}

export default function CheckoutTitleButton({ length }: ICheckoutTitleButton) {
  const router = useRouter();
  return (
    <>
      {length === 0 && (
        <PrimaryButton
          className="mx-auto px-6 py-3 text-lg font-semibold text-white md:px-8 md:py-4 xl:text-xl"
          onClick={() => router.push('/')}
        >
          <span>Continue Shopping</span>
        </PrimaryButton>
      )}
    </>
  );
}
