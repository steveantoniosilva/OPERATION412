import Head from 'next/head';
import styles from '../styles/Home.module.css';

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
          <h2>
            4 1 2 <span style={{ fontWeight: '100', letterSpacing: '3px' }}> BOOKS</span>
          </h2>
        </div>
        <div className={styles.desktop}>
          <h1>
            <span className={styles.missionDesktop}> 4 1 2 </span> BOOKS
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
