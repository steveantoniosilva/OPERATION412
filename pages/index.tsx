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
            <Heading level='huge'>E</Heading>
            <Heading level='huge'>P</Heading>
            <Heading level='huge'>H</Heading>
          </div>
          <div className={numbers.className}>
            <Heading level='huge'>4</Heading>
          </div>
          <div className={styles.operation412Description}>
            <Paragraph
              textAlign='center'
              fontStyle='italic'
              style={{ opacity: '.5' }}>
              equipping the saints
            </Paragraph>
          </div>
        </div>

        {/* PANEL 2 */}
        <div className={styles.stripe}>
          <div className={styles.operation}>
            <Heading level='huge'>E</Heading>
            <Heading level='huge'>S</Heading>
            <Heading level='huge'>I</Heading>
          </div>
          <div className={numbers.className}>
            <Heading level='huge'>1</Heading>
          </div>
          <div className={styles.operation412Description}>
            <Paragraph
              textAlign='center'
              fontStyle='italic'
              style={{ opacity: '.5' }}>
              for works of ministry
            </Paragraph>
          </div>
        </div>

        {/* PANEL 3 */}
        <div className={styles.stripe}>
          <div className={styles.operation}>
            <Heading level='huge'>A</Heading>
            <Heading level='huge'>N</Heading>
            <Heading level='huge'>S</Heading>
          </div>
          <div className={numbers.className}>
            <Heading level='huge'>2</Heading>
                </div>
            <div className={styles.operation412Description}>
              <Paragraph
                textAlign='center'
                fontStyle='italic'
                style={{ opacity: '.5' }}>
                so the Body is built up
              </Paragraph>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
