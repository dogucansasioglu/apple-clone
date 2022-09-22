import ProductImage from './image/ProductImage';
import ProductRemove from './remove/ProductRemove';
import ProductTitle from './title/ProductTitle';

export interface ICheckoutProduct {
  item: ProductObj;
}

const CheckoutProduct = ({ item }: ICheckoutProduct) => {
  return (
    <div className="flex flex-col gap-x-4 border-b border-gray-300 pb-5 pt-2 sm:flex-row sm:items-center">
      <ProductImage image={item.product.image} title={item.product.title} />

      <div className="flex flex-1 items-end lg:items-center">
        <ProductTitle
          id={item.product._id}
          title={item.product.title}
          length={item.quantity}
        />
        <ProductRemove
          id={item.product._id}
          title={item.product.title}
          price={item.product.price * item.quantity}
        />
      </div>
    </div>
  );
};

export default CheckoutProduct;
