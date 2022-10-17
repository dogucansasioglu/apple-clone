import SuccessBodyCard from './SuccessBodyCard';
import SuccessBodyCardContainer from './SuccessBodyCardContainer';

export default function SuccessBody() {
  return (
    <>
      <SuccessBodyCardContainer className="divide-y divide-gray-300">
        <SuccessBodyCard
          className="pb-3"
          title="Your order is confirmed"
          description="We've accepted your order, and we're getting it ready.
            Come back to this page for updates on your shipment status."
        />
        <SuccessBodyCard
          className="pt-3"
          title="Tracking number"
          description="CNB52345216"
        />
      </SuccessBodyCardContainer>

      <SuccessBodyCardContainer className="mt-3">
        <SuccessBodyCard
          title="Order updates"
          description="You'll get shipping and delivery updates by email and text"
        />
      </SuccessBodyCardContainer>
    </>
  );
}
