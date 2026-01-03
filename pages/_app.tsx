import '@/styles/globals.css';
import Navbar from '../components/Navbar';
import type { AppProps } from 'next/app';
import Head from 'next/head';
// import Logo from '@/components/Logo';
import { Spectral } from 'next/font/google';

const siteFont = Spectral({
  subsets: ['latin'],
  weight: ['300', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Battle Cry Books</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <meta
          name='description'
          content='Ephesians 4:12 Called. 412 Books Answered. Books for the Call—Equip the Saints for Works of Ministry and to Build up the Body of Christ.'
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
