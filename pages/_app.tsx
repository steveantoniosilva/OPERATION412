import '@/styles/globals.css';
import Navbar from '../components/Navbar';
import type { AppProps } from 'next/app';
import Head from 'next/head';
// import Logo from '@/components/Logo';
import { Cormorant_Garamond } from 'next/font/google';

const siteFont = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '700'],
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Operation 412</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <meta
          name='description'
          content='Ephesians 4:12 called. Operation 412 answered: equip believers for the work of ministry; build up the Body of Christ.'
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
