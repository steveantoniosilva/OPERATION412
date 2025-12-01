import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '600', '700', '800'],
});

const Home = () => {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Home'
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.mobile}>
          <h1>
            <span className={styles.mission}>MISSION</span>
            <br />
            <span className={styles.four}>FOUR</span>
            <br />
            <span className={styles.twelve}>TWELVE</span>
          </h1>
        </div>
        <div className={styles.desktop}>
          <h1>
            MISSION <span className={styles.four}>FOUR</span> TWELVE
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
