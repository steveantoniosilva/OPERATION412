import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Grey_Qo } from 'next/font/google';

const titleText = Grey_Qo({
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
          backgroundImage: 'url(burningbush.avif)',
          backgroundPosition: '55% 50%',
          backgroundColor: 'rgba(44,44,44,.5)',
        }}
        className='main'>
        <div className={styles.container}>
          <h4 className={styles.title}>
            <span className={`${titleText.className} ${styles.b}`}>b</span>
            urning bush encounters
          </h4>
        </div>
      </div>
    </>
  );
};

export default Home;
