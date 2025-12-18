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
          content='Ephesians 4:12 Called. Operation 412 Answered. Books for the Call.'
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
            <Heading level='huge'>4</Heading>
            <Spacer size={0.6} />
            <div className={styles.operation412Description}>
              <Paragraph
                textAlign='center'
                fontStyle='italic'
                style={{ opacity: '.5' }}>
                Operation: A Coordinated Mission.
              </Paragraph>
            </div>
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
            <Heading level='huge'>1</Heading>
            <Spacer size={0.6} />
            <div className={styles.operation412Description}>
              <Paragraph
                textAlign='center'
                fontStyle='italic'
                style={{ opacity: '.5' }}>
                412: The Call of Ephesians 4:12.
              </Paragraph>
            </div>
          </div>
        </div>

        {/* PANEL 3 */}
        <div className={styles.stripe}>
          <div className={styles.operation}>
            <Heading level='huge'>I</Heading>
            <Heading level='huge'>O</Heading>
            <Heading level='huge'>N</Heading>
          </div>
          <div className={numbers.className}>
            <Heading level='huge'>2</Heading>
            <Spacer size={0.6} />
            <div className={styles.operation412Description}>
              <Paragraph
                textAlign='center'
                fontStyle='italic'
                style={{ opacity: '.5' }}>
                I Write Books For The Call
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
