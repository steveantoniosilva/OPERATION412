import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Operation 412 — Equip believers for the work of ministry and build up the body of Christ.'
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.bun}></div>
        <div className={styles.letter}>4</div>

        <div className={styles.bun}></div>
        <div className={styles.letter}>1</div>

        <div className={styles.bun}></div>
        <div className={styles.letter}>2</div>
        <div className={styles.bun}></div>
      </div>
    </>
  );
};

export default Home;
