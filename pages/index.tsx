import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Playwrite_MX_Guides } from 'next/font/google';

const titleText = Playwrite_MX_Guides({
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
          backgroundColor: 'rgba(1,1,1,.8)',
        }}
        className='main'>
        <div className={styles.container}>
          <h3 className={`${styles.title} ${titleText.className}`}>Burning Bush Encounters</h3>
        </div>
      </div>
    </>
  );
};

export default Home;
