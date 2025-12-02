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
            MISSION
            <br />
            <span className={styles.fourMobile}>FOUR</span>
            <br />
            <span className={styles.twelveMobile}>TWELVE</span>
          </h1>
        </div>
        <div className={styles.desktop}>
          <h1>
            MISSION <span className={styles.fourDesktop}> FOUR </span> TWELVE
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
