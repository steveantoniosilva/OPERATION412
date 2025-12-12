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
            <div className={styles.armyAndBody}>HIS ARMY TO</div>
            <div className={styles.standAndFight}>FIGHT</div>
          </div>
        </div>

        {/* STRIPE 2 */}
        <div className={styles.stripe}>
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

// The Greek word for “EQUIP” was historically used to describe:

// Then a sequence of verb → object pairs, like these:

// MENDING — fishing nets

// SETTING — dislocated bones

// RECONCILING — relationships

// FORMING — by exercising

// READYING — household courtyards

// OUTFITTING — naval warships

// PREPARING — slings

// RESTORING — fallen sinners

// FRAMING — the universe

// BRINGING — order to cities

// POSITIONING — armies for battle

// EQUIPPING — ships with rowers

// Then you mirrored it with oikodome language:

// The Greek word for “BUILD UP” was historically used to describe:

// FORTIFYING — city walls

// REPAIRING — temple stones

// EXPANDING — a household

// RESTORING — a collapsed structure

// STRENGTHENING — a foundation
