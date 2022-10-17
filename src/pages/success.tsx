import { containerVariants } from '@/components/utility/motion/Variants';
import { SuccessBody, SuccessButtons, SuccessTitle } from '@/features/success';
import { m } from 'framer-motion';
import Head from 'next/head';

const Success = () => {
  return (
    <div className="flex w-full items-start justify-center">
      <Head>
        <title>Thank you! - Equal</title>
      </Head>

      <m.main
        className="max-w-xl space-y-3 p-7"
        initial="out"
        animate="in"
        variants={containerVariants}
      >
        <SuccessTitle />
        <SuccessBody />
        <SuccessButtons />
      </m.main>
    </div>
  );
};

export default Success;
