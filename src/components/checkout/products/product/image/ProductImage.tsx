import Image from 'next/image';
import { urlFor } from '../../../../../lib/sanity.server';

export interface IProductImage {
  image: Image;
  title: string;
}

const ProductImage = ({ image, title }: IProductImage) => {
  return (
    <div className="relative h-44 w-44">
      <Image
        src={urlFor(image).url()}
        layout="fill"
        objectFit="contain"
        alt={`image of ${title}`}
      />
    </div>
  );
};

export default ProductImage;
