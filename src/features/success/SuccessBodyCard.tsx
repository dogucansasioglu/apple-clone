import { fadeYVariants } from '@/components/utility/motion/Variants';
import { m } from 'framer-motion';

export interface ISuccessBodyCard {
  title: string;
  description: string;
  className?: string;
}

export default function SuccessBodyCard({
  title,
  description,
  className = '',
}: ISuccessBodyCard) {
  return (
    <m.div className={className} variants={fadeYVariants}>
      <h2 className="font-medium">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </m.div>
  );
}
//   return (
//     <div className={className}>
//       <p className="font-medium">{title}</p>
//       <p className="text-sm text-gray-600">{description}</p>
//     </div>
//   );
// }
