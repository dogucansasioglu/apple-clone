import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="application-name" content="Equal by @dogucansasioglu" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content="Equal by @dogucansasioglu"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta
          name="description"
          content="Discover the innovative world of Equal and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, plus explore accessories, entertainment, and expert device support."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
