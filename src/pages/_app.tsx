import PrimaryLayout from '@/components/layout';
import '@/styles/globals.css';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from '../store/store';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();

  // page transition animation
  const variants = {
    initialState: {
      opacity: 0,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    },
    animateState: {
      opacity: 1,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    },
    exitState: {
      opacity: 0,
      clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
    },
  };

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <LazyMotion features={domAnimation}>
          <AnimatePresence mode="wait">
            <m.div
              key={router.route}
              initial="initialState"
              animate="animateState"
              exit="exitState"
              transition={{ duration: 0.75 }}
              variants={variants}
            >
              <Toaster />
              <PrimaryLayout>
                <Head>
                  <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                  />
                </Head>
                <Component {...pageProps} />
              </PrimaryLayout>
            </m.div>
          </AnimatePresence>
        </LazyMotion>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
