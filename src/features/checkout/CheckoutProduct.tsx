import ProductImage from './CheckoutProductImage';
import ProductRemove from './CheckoutProductRemove';
import ProductTitle from './CheckoutProductTitle';

export interface ICheckoutProduct {
  item: ProductObj;
}

export default function CheckoutProduct({ item }: ICheckoutProduct) {
  console.log(item);
  return (
    <div className="flex flex-col gap-x-4 border-b border-gray-300 py-5 sm:flex-row sm:items-center">
      <ProductImage image={item.product.image} title={item.product.title} />

      <div className="flex flex-1 items-end lg:items-center">
        <ProductTitle
          id={item.product._id}
          title={item.product.title}
          quantity={item.quantity}
        />
        <ProductRemove
          id={item.product._id}
          title={item.product.title}
          price={item.product.price * item.quantity}
        />
      </div>
    </div>
  );
}
