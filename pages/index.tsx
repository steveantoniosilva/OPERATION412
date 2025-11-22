import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '600'],
});

const Home = () => {
  return (
    <>
      <Head>
        <title>Burning Bush Books</title>
        <meta
          name='description'
          content='Home'
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.mobile}>
          <h1 className={`${styles.burningBush} ${poppins.className}`}>
            Burning
            <br />
            Bush
            <br />
            <span className={styles.books}>Books</span>
          </h1>
        </div>
        <div className={styles.desktop}>
          <h1 className={`${styles.burningBush} ${poppins.className}`}>
            Burning Bush <span className={styles.books}>Books</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
