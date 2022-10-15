import PromoCheckoutButton from './PromoCheckoutButton';
import PromoImage from './PromoImage';
import PromoText from './PromoText';

export interface IPromoProduct {
  product: Product;
}

export default function IPromoProduct({ product }: IPromoProduct) {
  return (
    <div className="flex h-full w-[320px] select-none flex-col space-y-3 rounded-xl bg-promo p-8 sm:w-[400px] sm:p-10">
      <PromoImage image={product.image} title={product.title} />
      <div className="flex flex-1 items-end justify-between space-x-3 pt-5">
        <PromoText title={product.title} price={product.price} />

        <PromoCheckoutButton product={product} />
      </div>
    </div>
  );
}
