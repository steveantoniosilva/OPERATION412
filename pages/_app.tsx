import '@/styles/globals.css';
import Navbar from '../components/Navbar';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Logo from '@/components/Logo';
import { Vollkorn } from 'next/font/google';

const vollkorn = Vollkorn({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
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

      <div className={vollkorn.className}>
        <Logo />
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}
