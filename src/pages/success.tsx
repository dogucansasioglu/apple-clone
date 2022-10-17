import { SuccessBody, SuccessButtons, SuccessTitle } from '@/features/success';
import Head from 'next/head';

const Success = () => {
  return (
    <div className="flex w-full items-start justify-center">
      <Head>
        <title>Thank you! - Apple</title>
      </Head>

      <main className="max-w-xl space-y-3 p-7">
        <SuccessTitle />
        <SuccessBody />
        <SuccessButtons />
      </main>
    </div>
  );
};

export default Success;
