import { containerVariants } from '@/components/utility/motion/Variants';
import { SuccessBody, SuccessButtons, SuccessTitle } from '@/features/success';
import { motion } from 'framer-motion';
import Head from 'next/head';

const Success = () => {
  return (
    <div className="flex w-full items-start justify-center">
      <Head>
        <title>Thank you! - Equal</title>
      </Head>

      <motion.main
        className="max-w-xl space-y-3 p-7"
        initial="out"
        animate="in"
        variants={containerVariants}
      >
        <SuccessTitle />
        <SuccessBody />
        <SuccessButtons />
      </motion.main>
    </div>
  );
};

export default Success;
