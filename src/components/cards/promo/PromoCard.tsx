import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Image from 'next/future/image';
import { useDispatch } from 'react-redux';
import { urlFor } from '../../../lib/sanity.server';
import { addToBasket } from '../../../store/basketSlice';

export interface IPromoCard {
  product: Product;
}

const PromoCard = ({ product }: IPromoCard) => {
  const dispatch = useDispatch();

  const addItemToBasket = async () => {
    dispatch(addToBasket(product));
    const toast = (await import('react-hot-toast')).default;
    toast.success(`${product.title} added to bag!`, {
      position: 'bottom-center',
    });
  };

  return (
    <div className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-promo p-8 md:h-[500px] md:w-[400px] md:p-10">
      <div className="relative h-64 w-full md:h-72">
        <Image
          src={urlFor(product.image._ref).url()}
          blurDataURL={product.image.lqip}
          placeholder="blur"
          fill
          className="object-contain"
          alt={`image of ${product.title}`}
        />
      </div>

      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-white md:text-2xl">
          <p>{product.title}</p>
          <p>${product.price}</p>
        </div>

        <div
          className="flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 transition-all duration-300 ease-in hover:opacity-90 md:h-[70px] md:w-[70px]"
          onClick={addItemToBasket}
        >
          <ShoppingCartIcon className="h-8 cursor-pointer text-white" />
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
