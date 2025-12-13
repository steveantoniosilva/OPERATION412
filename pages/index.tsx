import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Heading from '@/components/Heading';

const Home = () => {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Ephesians 4:12 called. Operation 412 answered: equip believers for the work of ministry; build up the Body of Christ.'
        />
      </Head>

      {/* MOBILE */}
      <div className={styles.mobileContainer}>
        <div className={styles.stripe}>4</div>
        <div className={styles.stripe}>1</div>
        <div className={styles.stripe}>2</div>
      </div>

      {/* DESKTOP */}
      <div className={styles.desktopContainer}>
        {/* PANEL 1 */}
        <div className={styles.stripe}>
          <div className={styles.inner}>
            <div className={styles.front}>
              <div className={styles.operation}>
                <span>O</span>
                <span>P</span>
                <span>E</span>
              </div>
              <div className={styles.fourTwelve}>4</div>
            </div>

            <div className={styles.back}>
              <Heading>
                <span>EQUIP</span>
                <br />
                HIS
                <br />
                ARMY
              </Heading>
            </div>
          </div>
        </div>

        {/* PANEL 2 */}
        <div className={styles.stripe}>
          <div className={styles.inner}>
            <div className={styles.front}>
              <div className={styles.operation}>
                <span>R</span>
                <span>A</span>
                <span>T</span>
              </div>
              <div className={styles.fourTwelve}>1</div>
            </div>
            <div className={styles.back}>
              <Heading>
                <span>BUILD</span>
                <br />
                HIS
                <br />
                BODY
              </Heading>
            </div>
          </div>
        </div>

        {/* PANEL 3 */}
        <div className={styles.stripe}>
          <div className={styles.inner}>
            <div className={styles.front}>
              <div className={styles.operation}>
                <span>I</span>
                <span>O</span>
                <span>N</span>
              </div>
              <div className={styles.fourTwelve}>2</div>
            </div>
            <div className={styles.back}>
              <Heading>
                <span>FIRE</span>
                <br />
                HIS
                <br />
                ARROWS
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
