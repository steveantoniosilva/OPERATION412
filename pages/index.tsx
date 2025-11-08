import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Neonderthaw } from 'next/font/google';

const titleText = Neonderthaw({
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
        style={{
          backgroundImage: 'url(fire.avif)',
          backgroundPosition: '55% 5%',
          backgroundColor: 'rgba(1,1,1,.875)',
        }}
        className='main'>
        <div className={styles.container}>
          <h3 className={styles.title}>Burning Bush Encounters</h3>
        </div>
      </div>
    </>
  );
};

export default Home;
