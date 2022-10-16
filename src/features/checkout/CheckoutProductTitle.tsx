import CheckoutProductSelectQuantity from './CheckoutProductSelectQuantity';
import CheckoutProductStock from './CheckoutProductStock';

export interface ICheckoutProductTitle {
  title: string;
  quantity: number;
  id: string;
}

export default function CheckoutProductTitle({
  title,
  quantity,
  id,
}: ICheckoutProductTitle) {
  return (
    <div className="flex-1 space-y-4">
      <div className="flex flex-row gap-x-8 text-xl md:text-2xl ">
        <h4 className="w-28 select-none font-medium md:w-60 lg:w-96">
          {title}
        </h4>
        <p className="flex items-center justify-center">
          <CheckoutProductSelectQuantity quantity={quantity} id={id} />
        </p>
      </div>
      <CheckoutProductStock />
    </div>
  );
}
