import { fadeYVariants } from '@/components/utility/motion/Variants';
import { m } from 'framer-motion';
import Image from 'next/future/image';

export default function HeroImage() {
  let imageWidth = 600;
  let imageHeight = 600;
  if (typeof window !== 'undefined') {
    const viewportWidth = window.innerWidth;
    imageWidth = viewportWidth > 768 ? 600 : 300;
    imageHeight = viewportWidth > 768 ? 600 : 300;
  }

  return (
    <m.div
      className="right-0 hidden justify-self-end text-right md:inline"
      variants={fadeYVariants}
    >
      <Image
        src="/iphone.png"
        priority
        alt="image of iPhone"
        height={imageHeight}
        width={imageWidth}
      />
    </m.div>
  );
}
