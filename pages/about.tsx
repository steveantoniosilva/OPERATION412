import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import styles from '../styles/about.module.css';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import { Crimson_Text } from 'next/font/google';
import Spacer from '@/components/Spacer';

const numbers = Crimson_Text({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
});

const About = () => {
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
        <title>About Operation 412</title>

        <meta
          name='description'
          content='The Mission of Operation 412 is the Commission of Ephesians 4:12—Equip His Saints, Work His Works and Build His Body.'
        />
      </Head>

      {/* ================= MOBILE ================= */}
      {/* No VanillaTilt. Just links. */}
      <div className={styles.mobileContainer}>
        <Link
          href='/equip'
          className={styles.link}>
          <div className={styles.stripe}>
            <Heading>The Equipping</Heading>
            <Paragraph>of His Saints</Paragraph>
          </div>
        </Link>

        <Link
          href='/work'
          className={styles.link}>
          <div className={styles.stripe}>
            <Heading>The Working</Heading>
            <Paragraph>of His Works</Paragraph>
          </div>
        </Link>

        <Link
          href='/build'
          className={styles.link}>
          <div className={styles.stripe}>
            <Heading>The Building</Heading>
            <Paragraph>of His Body</Paragraph>
          </div>
        </Link>
      </div>

      {/* DESKTOP */}
      <div className={styles.container}>
        {/* STRIPE 1 */}
        <Link
          href='/the-equipping'
          className={styles.link}>
          <div
            ref={el => {
              if (el) stripesRef.current[0] = el;
            }}
            className={styles.stripe}>
            <div className={styles.ephesians}>
              <Heading level='huge'>
                <span>E</span>
              </Heading>
              <Heading level='huge'>
                <span>P</span>
              </Heading>
              <Heading level='huge'>
                <span>H</span>
              </Heading>
            </div>
            <div className={numbers.className}>
              <Heading level='huge'>4</Heading>
            </div>
            <Spacer size={3} />
            <div style={{ opacity: '.625' }}>
              <Heading style={{ fontStyle: 'italic' }}>The Equipping</Heading>
              <Paragraph style={{ fontStyle: 'italic' }}>of the Saints</Paragraph>
            </div>
          </div>
        </Link>

        {/* STRIPE 2 */}
        <Link
          href='/the-work'
          className={styles.link}>
          <div
            ref={el => {
              if (el) stripesRef.current[1] = el;
            }}
            className={styles.stripe}>
            <div className={styles.ephesians}>
              <Heading level='huge'>
                <span>E</span>
              </Heading>
              <Heading level='huge'>
                <span>S</span>
              </Heading>
              <Heading level='huge'>
                <span>I</span>
              </Heading>
            </div>
            <div className={numbers.className}>
              <Heading level='huge'>1</Heading>
            </div>
            <Spacer size={3} />
            <div style={{ opacity: '.625' }}>
              <Heading style={{ fontStyle: 'italic' }}>The Work</Heading>
              <Paragraph style={{ fontStyle: 'italic' }}>of the Ministry</Paragraph>
            </div>
          </div>
        </Link>

        {/* STRIPE 3 */}
        <Link
          href='/the-building'
          className={styles.link}>
          <div
            ref={el => {
              if (el) stripesRef.current[2] = el;
            }}
            className={styles.stripe}>
            <div className={styles.ephesians}>
              <Heading level='huge'>
                <span>A</span>
              </Heading>
              <Heading level='huge'>
                <span>N</span>
              </Heading>
              <Heading level='huge'>
                <span>S</span>
              </Heading>
            </div>
            <div className={numbers.className}>
              <Heading level='huge'>2</Heading>
            </div>
            <Spacer size={3} />
            <div style={{ opacity: '.625' }}>
              <Heading style={{ fontStyle: 'italic' }}>The Building</Heading>
              <Paragraph style={{ fontStyle: 'italic' }}>of the Body</Paragraph>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default About;
