import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import Spacer from '@/components/Spacer';
import { Crimson_Text } from 'next/font/google';

const numbers = Crimson_Text({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
});

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

      {/* ----------------------------- */}
      {/* MOBILE: HORIZONTAL STRIPES */}
      {/* ----------------------------- */}
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

      {/* ----------------------------- */}
      {/* DESKTOP: VERTICAL STRIPES */}
      {/* ----------------------------- */}
      <div className={styles.desktopContainer}>
        {/* PANEL 1 */}
        <div className={styles.stripe}>
          <div className={styles.operation}>
            <Heading level='huge'>
              <span>O</span>
            </Heading>
            <Heading level='huge'>
              <span>P</span>
            </Heading>
            <Heading level='huge'>
              <span>E</span>
            </Heading>
          </div>
          <div className={numbers.className}>
            <Heading
              style={{ opacity: 0.15 }}
              level='huge'>
              4
            </Heading>
          </div>
          <Spacer size={0.6} />
          <div>
            <Heading level='subtitle'>THE SOUNDING</Heading>
          </div>
        </div>

        {/* PANEL 2 */}
        <div className={styles.stripe}>
          <div className={styles.operation}>
            <Heading level='huge'>
              <span>R</span>
            </Heading>
            <Heading level='huge'>
              <span>A</span>
            </Heading>
            <Heading level='huge'>
              <span>T</span>
            </Heading>
          </div>
          <div className={numbers.className}>
            <Heading
              style={{ opacity: 0.15 }}
              level='huge'>
              1
            </Heading>
          </div>
          <Spacer size={0.6} />
          <div>
            <Heading level='subtitle'>OF THE</Heading>
          </div>
        </div>

        {/* PANEL 3 */}
        <div className={styles.stripe}>
          <div className={styles.operation}>
            <Heading level='huge'>
              <span>I</span>
            </Heading>
            <Heading level='huge'>
              <span>O</span>
            </Heading>
            <Heading level='huge'>
              <span>N</span>
            </Heading>
          </div>
          <div className={numbers.className}>
            <Heading
              style={{ opacity: 0.15 }}
              level='huge'>
              2
            </Heading>
          </div>
          <Spacer size={0.6} />
          <div>
            <Heading level='subtitle'>RAM'S HORN</Heading>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
