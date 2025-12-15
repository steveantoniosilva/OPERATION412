import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';

const Home = () => {
  return (
    <>
      <Head>
        <title>Operation 412</title>
        <meta
          name='description'
          content='The Mission of Operation 412 is the Commission of Ephesians 4:12—Equip His Saints, Work His Works and Build His Body.'
        />
      </Head>

      {/* MOBILE */}
      <div className={styles.mobileContainer}>
        <div className={styles.stripe}>
          <Heading>OPERATION</Heading>
        </div>
        <div className={styles.stripe}>
          <Heading level='huge'>4</Heading>
        </div>
        <div className={styles.stripe}>
          <Heading level='huge'>12</Heading>
        </div>
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
              <Heading>EQUIPPING</Heading>
              <Paragraph>HIS SAINTS</Paragraph>
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
              <Heading>WORKING</Heading>
              <Paragraph>HIS WORKS</Paragraph>
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
              <Heading>BUILDING</Heading>
              <Paragraph>HIS BODY</Paragraph>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
