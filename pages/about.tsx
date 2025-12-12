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

      <div className={styles.container}>
        {/* STRIPE 1 */}
        <div className={styles.stripe}>
          <div className={styles.inner}>
            <div className={styles.equipAndBuild}>EQUIP</div>
            <h1 className={styles.armyAndBody}>HIS ARMY TO</h1>
            <div className={styles.standAndFight}>FIGHT</div>
          </div>
        </div>

        {/* STRIPE 2 */}
        <div className={styles.stripe}>
          <div className={styles.inner}>
            <div className={styles.equipAndBuild}>BUILD</div>
            <h1 className={styles.armyAndBody}>HIS BODY TO</h1>
            <div className={styles.standAndFight}>STAND</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
