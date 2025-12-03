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
          <h1>MISSION</h1>
          <h2>FOUR TWELVE</h2>
        </div>
        <div className={styles.desktop}>
          <h1>
            <span className={styles.fourDesktop}> MISSION </span> FOUR TWELVE
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
