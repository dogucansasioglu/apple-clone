import { urlFor } from '@/lib/sanity.server';
import Image from 'next/future/image';

export interface IPromoImage {
  image: Image;
  title: string;
}

export default function PromoImage({ image, title }: IPromoImage) {
  if (!image || !title) return null;
  const height = 256;
  const width = 256;
  return (
    <div className="flex w-full items-center justify-center">
      <Image
        src={urlFor(image._ref).url()}
        blurDataURL={image.lqip}
        placeholder="blur"
        alt={`image of ${title}`}
        width={height}
        height={width}
        loading="lazy"
      />
    </div>
  );
}
