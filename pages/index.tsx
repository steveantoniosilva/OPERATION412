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
              <div className={styles.fourTwelve}>equip</div>
              <div className={styles.operation}>
                <span>O</span>
                <span>P</span>
                <span>E</span>
              </div>
              <div className={styles.fourTwelve}>4</div>
            </div>
          </div>

          <div className={styles.stripe}>
            <div className={styles.inner}>
              <div style={{color:'transparent'}} className={styles.fourTwelve}>1</div>
              <div className={styles.operation}>
                <span>R</span>
                <span>A</span>
                <span>T</span>
              </div>
              <div className={styles.fourTwelve}>1</div>
            </div>
          </div>

          <div className={styles.stripe}>
            <div className={styles.inner}>
              <div className={styles.fourTwelve}>build</div>
              <div className={styles.operation}>
                <span>I</span>
                <span>O</span>
                <span>N</span>
              </div>
              <div className={styles.fourTwelve}>2</div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Home;
