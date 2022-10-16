import Loader from '@/components/utility/loader';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const DynamicCheckoutProducts = dynamic(() => import('./CheckoutProducts'), {
  suspense: true,
});
const DynamicCheckoutSummary = dynamic(() => import('./CheckoutSummary'), {
  suspense: true,
});

const DynamicCheckoutButton = dynamic(() => import('./CheckoutButton'), {
  suspense: true,
});

export default function CheckoutDetails() {
  return (
    <div className="flex flex-col">
      <Suspense fallback={<Loader />}>
        <DynamicCheckoutProducts />
        <DynamicCheckoutSummary />
        <DynamicCheckoutButton />
      </Suspense>
    </div>
  );
}
