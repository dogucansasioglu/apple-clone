import Head from 'next/head';
import SuccessBody from '../components/success/body/SuccessBody';
import SuccessButtons from '../components/success/buttons/SuccessButtons';
import SuccessThank from '../components/success/thank/SuccessThank';

const Success = () => {
  return (
    <div className="flex w-full items-start justify-center">
      <Head>
        <title>Thank you! - Apple</title>
      </Head>

      <main className="max-w-xl space-y-3 p-7">
        <SuccessThank />
        <SuccessBody />
        <SuccessButtons />
      </main>
    </div>
  );
};

export default Success;
