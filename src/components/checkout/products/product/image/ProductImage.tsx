import Image from 'next/future/image';
import { urlFor } from '../../../../../lib/sanity.server';

export interface IProductImage {
  image: Image;
  title: string;
}

const ProductImage = ({ image, title }: IProductImage) => {
  return (
    <div className="relative h-44 w-44">
      <Image
        src={urlFor(image._ref).url()}
        blurDataURL={image.lqip}
        placeholder="blur"
        fill
        className="object-contain"
        alt={`image of ${title}`}
      />
    </div>
  );
};

export default ProductImage;
