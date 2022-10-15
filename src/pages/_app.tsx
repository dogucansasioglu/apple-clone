import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Loader from '../components/loader/loader';
import { store } from '../store/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Loader />
      <Provider store={store}>
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
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
