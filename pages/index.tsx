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
        <title>Flint & Steel Books</title>
        <meta
          name='description'
          content='Home'
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.mobile}>
          <h1 className={`${styles.burningBushMobile} ${poppins.className}`}>
            Flint
            <br />
            &
            <br />
            Steel
            <br />
            <span className={styles.booksMobile}>Books</span>
          </h1>
        </div>
        <div className={styles.desktop}>
          <h1 className={`${styles.burningBushDesktop} ${poppins.className}`}>
            Flint & Steel <span className={styles.booksDesktop}>Books</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
