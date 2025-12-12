import Head from 'next/head';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import styles from '../styles/about.module.css';

const About = () => {
  const stripesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    stripesRef.current.forEach(el => {
      if (!el) return;

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
        <meta
          name='description'
          content='Ephesians 4:12 called. Operation 412 answered: equip believers for the work of ministry; build up the Body of Christ.'
        />
      </Head>

      <div className={styles.container}>
        {/* STRIPE 1 */}
        <div
          ref={el => {
            if (el) stripesRef.current[0] = el;
          }}
          className={styles.stripe}>
          <div className={styles.inner}>
            <div className={styles.equipAndBuild}>EQUIP</div>
            <div className={styles.armyAndBody}>HIS ARMY TO</div>
            <div className={styles.standAndFight}>FIGHT</div>
          </div>
        </div>

        {/* STRIPE 2 */}
        <div
          ref={el => {
            if (el) stripesRef.current[1] = el;
          }}
          className={styles.stripe}>
          <div className={styles.inner}>
            <div className={styles.equipAndBuild}>BUILD</div>
            <div className={styles.armyAndBody}>HIS BODY TO</div>
            <div className={styles.standAndFight}>STAND</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
