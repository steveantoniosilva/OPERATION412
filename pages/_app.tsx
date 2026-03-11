import '@/styles/globals.css';
import Navbar from '../components/Navbar';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Poppins } from 'next/font/google';

const siteFont = Poppins({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['100', '400', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tiny Field Manuals | Field Manuals for Believers</title>

        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />

        <meta
          name='description'
          content='Tiny Field Manuals for believers. Each manual focuses on one targets one topic in the Bible, and each chapter unpacks one bible verse.'
        />

        <meta
          name='author'
          content='Steve Silva'
        />

        <meta
          property='og:title'
          content='Tiny Field Manuals | Field Manuals for Believers'
        />

        <meta
          property='og:description'
          content='Tiny field manuals for believers. Each manual targets one topic in the Bible. Each chapter unpacks one Bible verse.'
        />

        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content='https://tinyfieldmanuals.com'
        />

        <link
          rel='canonical'
          href='https://tinyfieldmanuals.com'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>

      <div className={siteFont.className}>
        {/* <Logo /> */}
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}
