import Head from 'next/head';
import styles from '../styles/about.module.css';

const About = () => {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Ephesians 4:12 called. Operation 412 answered: equip believers for the work of ministry; build up the Body of Christ.'
        />
      </Head>

      {/* MOBILE */}
      <div className={styles.mobileContainer}>
        <div className={styles.stripe}>4</div>
        <div className={styles.stripe}>12</div>
      </div>

      {/* DESKTOP */}
      <div className={styles.desktopContainer}>
        {/* LEFT */}
        <div className={styles.stripe}>
          <div className={styles.inner}>
            <div className={styles.equipAndBuild}>EQUIP</div>
            <div className={styles.endTimeWarCall}>
              <span>E</span>
              <span>N</span>
              <span>D</span>
              <span style={{ letterSpacing: 0 }} />
              <span>T</span>
              <span>I</span>
              <span>M</span>
              <span>E</span>
            </div>
            <div className={styles.armyAndBody}>HIS ARMY</div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.stripe}>
          <div className={styles.inner}>
            <div className={styles.equipAndBuild}>BUILD</div>
            <div className={styles.endTimeWarCall}>
              <span style={{ color: 'red', fontWeight: 300 }}>W</span>
              <span style={{ color: 'red', fontWeight: 300 }}>A</span>
              <span style={{ color: 'red', fontWeight: 300 }}>R</span>
              <span style={{ letterSpacing: 0 }} />
              <span style={{ color: 'red', fontWeight: 300 }}>C</span>
              <span style={{ color: 'red', fontWeight: 300 }}>A</span>
              <span style={{ color: 'red', fontWeight: 300 }}>L</span>
              <span style={{ color: 'red', fontWeight: 300 }}>L</span>
            </div>
            <div className={styles.armyAndBody}>HIS BODY</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
