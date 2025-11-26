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
          <h1 className={`${styles.hammerAndForgeMobile} ${poppins.className}`}>
            HAMMER
            <br />
            &
            <br />
            FORGE
            <br />
            <span className={styles.booksMobile}>BOOKS</span>
          </h1>
        </div>
        <div className={styles.desktop}>
          <h1 className={`${styles.hammerAndForgeDesktop} ${poppins.className}`}>
            HAMMER & FORGE <span className={styles.booksDesktop}>BOOKS</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
