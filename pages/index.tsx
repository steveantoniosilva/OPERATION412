import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Quicksand } from 'next/font/google';

const titleText = Quicksand({
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
          backgroundPosition: '55% 93%',
          backgroundColor: 'rgba(139, 35, 0, 0.85)',
        }}
        className='main'>
        <div className={styles.container}>
          <h3 className={`${styles.title} ${titleText.className}`}>burning bush encounters</h3>
        </div>
      </div>
    </>
  );
};

export default Home;
