import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Cormorant_Garamond } from 'next/font/google';
import Image from 'next/image';

const titleText = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400'],
});

const Home = () => {
  return (
    <>
      <Head>
        <title>Burning Bush Encounters</title>
        <meta
          name='description'
          content='Home'
        />
      </Head>
      <div>
        <div className={styles.container}>
          <Image
            height={275}
            width={275}
            src='/logo.png'
            alt='Burning Bush Logo'
          />
          <h1 className={`${styles.title} ${titleText.className}`}>Encounters</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
