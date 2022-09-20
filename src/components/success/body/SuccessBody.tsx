const SuccessBody = () => {
  return (
    <>
      <div className="divide-y divide-gray-300 rounded-md border border-gray-300 p-4">
        <div className="pb-3">
          <p className="font-medium">Your order is confirmed</p>
          <p className="text-sm text-gray-600">
            We&apos;ve accepted your order, and we&apos;re getting it ready.
            Come back to this page for updates on your shipment status.
          </p>
        </div>
        <div className="pt-3">
          <p className="font-medium">Tracking number</p>
          <p className="text-sm text-gray-600">CNB52345216</p>
        </div>
      </div>

      <div className="rounded-md border border-gray-300 p-4">
        <p className="font-medium">Order updates</p>
        <p className="text-sm text-gray-600">
          You&apos;ll get shipping and delivery updates by email and text
        </p>
      </div>
    </>
  );
};

export default SuccessBody;
