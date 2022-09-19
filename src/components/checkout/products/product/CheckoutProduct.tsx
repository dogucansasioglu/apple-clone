import ProductImage from './image/ProductImage';
import ProductRemove from './remove/ProductRemove';
import ProductTitle from './title/ProductTitle';

export interface ICheckoutProduct {
  items: Product[];
  id: string;
}

const CheckoutProduct = ({ id, items }: ICheckoutProduct) => {
  return (
    <div className="flex flex-col gap-x-4 border-b border-gray-300 pb-5 pt-2 sm:flex-row sm:items-center">
      <ProductImage image={items[0].image[0]} title={items[0].title} />

      <div className="flex flex-1 items-end lg:items-center">
        <ProductTitle title={items[0].title} length={items.length} />
        <ProductRemove
          id={id}
          title={items[0].title}
          price={items.reduce((total, item) => total + item.price, 0)}
        />
      </div>
    </div>
  );
};

export default CheckoutProduct;
