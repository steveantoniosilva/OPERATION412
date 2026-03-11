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
        <title>tiny FIELD MANUALS</title>

        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />

        <meta
          name='description'
          content='tiny FIELD MANUALS | Field Manuals for Believers. Each manual targets a specific topic in the Bible and each chapter unpacks a specific verse.'
        />

        <meta
          name='author'
          content='Steve Silva'
        />

        <meta
          property='og:title'
          content='tiny FIELD MANUALS'
        />

        <meta
          property='og:description'
          content='tiny FIELD MANUALS | Field Manuals for Believers. Each manual targets a specific topic in the Bible and each chapter unpacks a specific verse.'
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
