import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
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
          <Component {...pageProps} />
        </PrimaryLayout>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
