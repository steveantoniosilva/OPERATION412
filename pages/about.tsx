import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import styles from '../styles/about.module.css';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import { Crimson_Text } from 'next/font/google';

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

      <div className={styles.container}>
        {/* STRIPE 1 */}
        <Link
          href='/equipping'
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
              <Heading
                style={{ opacity: 0.15 }}
                level='huge'>
                4
              </Heading>
            </div>
            <div>
              <Heading>EQUIP</Heading>
              <Paragraph>HIS SAINTS</Paragraph>
            </div>
          </div>
        </Link>

        {/* STRIPE 2 */}
        <Link
          href='/working'
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
              <Heading
                style={{ opacity: 0.15 }}
                level='huge'>
                1
              </Heading>
            </div>
            <div>
              <Heading>WORK</Heading>
              <Paragraph>HIS WORKS</Paragraph>
            </div>
          </div>
        </Link>

        {/* STRIPE 3 */}
        <Link
          href='/building'
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
              <Heading
                style={{ opacity: 0.15 }}
                level='huge'>
                2
              </Heading>
            </div>
            <div>
              <Heading>BUILD</Heading>
              <Paragraph>HIS BODY</Paragraph>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default About;
