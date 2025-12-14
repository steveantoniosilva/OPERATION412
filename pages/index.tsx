import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Heading from '@/components/Heading';
import Spacer from '@/components/Spacer';
import Paragraph from '@/components/Paragraph';

const Home = () => {
  return (
    <>
      <Head>
        <title>Operation 412</title>
        <meta
          name='description'
          content='Ephesians 4:12 called. Operation 412 answered: equip believers for the work of ministry; build up the Body of Christ.'
        />
      </Head>

      {/* MOBILE */}
      <div className={styles.mobileContainer}>
        <div className={styles.stripe}>I HEAR THE SOUND</div>
        <div className={styles.stripe}>OF THE RAMS HORN</div>
        <div className={styles.stripe}>BLOWING IN THE DISTANCE</div>
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
              <Paragraph fontFamily='cormorant'>I hear the sound</Paragraph>
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
              <Paragraph fontFamily='cormorant'>of the rams horn</Paragraph>
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
              <Paragraph fontFamily='cormorant'>blowing in the distance</Paragraph>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
