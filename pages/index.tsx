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
            <Heading level='huge'>O</Heading>
            <Heading level='huge'>P</Heading>
            <Heading level='huge'>E</Heading>
          </div>
          <div className={numbers.className}>
            <Heading
              style={{ opacity: 0.15 }}
              level='huge'>
              4
            </Heading>
          </div>
          <Spacer size={0.6} />
          <div className={styles.lowerParagraph}>
            <Paragraph textAlign='center'>
              I Heard <span style={{ fontStyle: 'italic' }}>A Mighty Sound</span> from the Blasting of{' '}
              <span style={{ fontStyle: 'italic' }}>A Mighty Ram's Horn</span>.
            </Paragraph>
          </div>
        </div>

        {/* PANEL 2 */}
        <div className={styles.stripe}>
          <div className={styles.operation}>
            <Heading level='huge'>R</Heading>
            <Heading level='huge'>A</Heading>
            <Heading level='huge'>T</Heading>
          </div>
          <div className={numbers.className}>
            <Heading
              style={{ opacity: 0.15 }}
              level='huge'>
              1
            </Heading>
          </div>
          <Spacer size={0.6} />
          <div className={styles.lowerParagraph}>
            <Paragraph textAlign='center'>
              I Saw <span style={{ fontStyle: 'italic' }}>A Mighty Army</span> Gathered in Battle Array in{' '}
              <span style={{ fontStyle: 'italic' }}>A Mighty Valley</span>.
            </Paragraph>
          </div>
        </div>

        {/* PANEL 3 */}
        <div className={styles.stripe}>
          <div className={styles.operation}>
            <Heading
              level='huge'
              className={styles.glow}>
              I
            </Heading>
            <Heading
              level='huge'
              className={styles.glow}>
              O
            </Heading>
            <Heading
              level='huge'
              className={styles.glow}>
              N
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
          <div className={styles.lowerParagraph}>
            <Paragraph textAlign='center'>
              I Saw <span style={{ fontStyle: 'italic' }}>A Mighty Warrior</span> Lead this{' '}
              <span style={{ fontStyle: 'italic' }}>Mighty Army</span> into{' '}
              <span style={{ fontStyle: 'italic' }}>A Mighty Battle</span>.
            </Paragraph>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
