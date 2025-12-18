import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import Spacer from '@/components/Spacer';
import { Crimson_Text } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const numbers = Crimson_Text({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
});

const Home = () => {
  const stripesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    stripesRef.current.forEach(el => {
      if (!el) return;
      if ((el as any).vanillaTilt) return;

      VanillaTilt.init(el, {
        max: 6,
        speed: 600,
        scale: 1.02,
        perspective: 1000,
        glare: true,
        'max-glare': 0.5,
      });
    });

    return () => {
      stripesRef.current.forEach(el => {
        (el as any)?.vanillaTilt?.destroy();
      });
    };
  }, []);

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
          <Heading
            level='huge'
            fontStyle='italic'>
            Equip
          </Heading>
        </div>
        <div className={styles.stripe}>
          <Heading
            level='huge'
            fontStyle='italic'>
            Work
          </Heading>
        </div>
        <div className={styles.stripe}>
          <Heading
            level='huge'
            fontStyle='italic'>
            Build
          </Heading>
        </div>
      </div>

      {/* ----------------------------- */}
      {/* DESKTOP: VERTICAL STRIPES */}
      {/* ----------------------------- */}
      <div className={styles.desktopContainer}>
        {/* PANEL 1 */}
        <Link
          href='/the-equipping'
          className={styles.link}>
          <div
            ref={el => {
              if (el) stripesRef.current[0] = el;
            }}
            className={styles.stripe}>
            <div className={styles.operation}>
              <Heading level='huge'>O</Heading>
              <Heading level='huge'>P</Heading>
              <Heading level='huge'>E</Heading>
            </div>

            <div className={numbers.className}>
              <Heading
                style={{ opacity: '.25' }}
                level='huge'>
                4
              </Heading>
            </div>

            <Heading
              level='huge'
              fontStyle='italic'>
              Equip
            </Heading>
          </div>
        </Link>

        {/* PANEL 2 */}
        <Link
          href='/the-work'
          className={styles.link}>
          <div
            ref={el => {
              if (el) stripesRef.current[1] = el;
            }}
            className={styles.stripe}>
            <div className={styles.operation}>
              <Heading level='huge'>R</Heading>
              <Heading level='huge'>A</Heading>
              <Heading level='huge'>T</Heading>
            </div>

            <div className={numbers.className}>
              <Heading
                style={{ opacity: '.25' }}
                level='huge'>
                1
              </Heading>
            </div>

            <Heading
              level='huge'
              fontStyle='italic'>
              Work
            </Heading>
          </div>
        </Link>

        {/* PANEL 3 */}
        <Link
          href='/the-building'
          className={styles.link}>
          <div
            ref={el => {
              if (el) stripesRef.current[2] = el;
            }}
            className={styles.stripe}>
            <div className={styles.operation}>
              <Heading level='huge'>I</Heading>
              <Heading level='huge'>O</Heading>
              <Heading level='huge'>N</Heading>
            </div>

            <div className={numbers.className}>
              <Heading
                style={{ opacity: '.25' }}
                level='huge'>
                2
              </Heading>
            </div>
            <Heading
              level='huge'
              fontStyle='italic'>
              Build
            </Heading>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
