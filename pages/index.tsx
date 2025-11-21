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
      <div
        style={
          {
            //   backgroundPosition: '55% 55%',
            //   backgroundImage: 'linear-gradient(to bottom, #000, rgba(139, 35, 0, 1)), url(bush.png)',
          }
        }
        className='main'>
        <div className={styles.container}>
          <h1 className={`${styles.title} ${titleText.className}`}>Burning Bush Encounters</h1>
          <Image
            height={111}
            width={111}
            src={'/burning-bush-logo.png'}
            alt='Burning Bush Logo'
          />
        </div>
      </div>
    </>
  );
};

export default Home;
