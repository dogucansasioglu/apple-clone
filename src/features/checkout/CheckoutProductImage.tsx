import { urlFor } from '@/lib/sanity.server';
import Image from 'next/future/image';

export interface ICheckoutProductImage {
  image: Image;
  title: string;
}

export default function CheckoutProductImage({
  image,
  title,
}: ICheckoutProductImage) {
  return (
    <Image
      src={urlFor(image._ref).url()}
      blurDataURL={image.lqip}
      placeholder="blur"
      width={176}
      height={176}
      alt={`image of ${title}`}
    />
  );
}
