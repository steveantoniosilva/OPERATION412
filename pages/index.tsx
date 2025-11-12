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
          backgroundPosition: '55% 60%',
          backgroundImage: 'linear-gradient(to bottom, #000, rgba(139, 35, 0, 0.25)), url(fire.avif)',
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
