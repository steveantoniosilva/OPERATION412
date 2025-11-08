import '@/styles/globals.css';
import Navbar from '../components/Navbar';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Logo from '@/components/Logo';
import { Playfair_Display_SC } from 'next/font/google';

const siteText = Playfair_Display_SC({
  subsets: ['latin'],
  weight: ['400'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Burning Bush Encounters</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>

      <div className={siteText.className}>
        <Logo />
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}
