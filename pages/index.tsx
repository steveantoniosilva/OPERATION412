import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
// import { Cormorant_Garamond } from 'next/font/google';

// const titleText = Cormorant_Garamond({
//   subsets: ['latin'],
//   weight: ['400'],
// });

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
          {/* <Image
            height={275}
            width={275}
            src='/logo.png'
            alt='Burning Bush Logo'
          /> */}
          {/* <h1 className={`${styles.title} ${titleText.className}`}>Encounters</h1> */}
          <h1 className={styles.title}>
            <span style={{ fontWeight: '100' }}>Burning Bush</span> Encounters
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
