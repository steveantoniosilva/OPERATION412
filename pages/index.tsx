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

      <>
        <div className={styles.mobileContainer}>
          <div className={styles.stripe}>4</div>
          <div className={styles.stripe}>1</div>
          <div className={styles.stripe}>2</div>
        </div>
        <div className={styles.desktopContainer}>
          <div className={styles.stripe}>
            <div className={styles.inner}>
              <div className={styles.operation}>OPE</div>
              <div className={styles.fourTwelve}>4</div>
            </div>
          </div>

          <div className={styles.stripe}>
            <div className={styles.inner}>
              <div className={styles.operation}>RAT</div>
              <div className={styles.fourTwelve}>1</div>
            </div>
          </div>

          <div className={styles.stripe}>
            <div className={styles.inner}>
              <div className={styles.operation}>ION</div>
              <div className={styles.fourTwelve}>2</div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Home;
