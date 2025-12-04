import styles from '../styles/about.module.css';
import { Cormorant_Garamond } from 'next/font/google';

const textFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '700'],
  style: ['normal', 'italic'],
});

const About = () => {
  return (
    <div className='main'>
      <div className='container'>
        <div style={{ paddingTop: '222px' }}></div>
        <h1>
          4 1 2<span style={{ fontWeight: '100', letterSpacing: '3px' }}> BOOKS</span>
        </h1>
        <h5 className={`${styles.subtitle} ${textFont.className}`}>
          I write books “for the <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>EQUIPPING</span> of the
          saints for the work of ministry, for the building up of the body of Christ.”
        </h5>
        <br />
        <h6 style={{ fontWeight: '100', letterSpacing: '11px', paddingLeft: '22px' }}>EPHESIANS</h6>
        <h1 style={{ fontWeight: '700', letterSpacing: '33px', paddingLeft: '45px' }}>4:12</h1>
        <br />
        <p>( NASB )</p>
        <br />
        <br />
        <h5 className={styles.oneHundred}>
          <span
            className={` 
            ${styles.italic} 
            ${styles.sevenHundred} 
            `}>
            EQUIPPING
          </span>{' '}
          in Greek is{' '}
          <span
            className={` 
          ${styles.oneHundred}
          ${styles.italic}
            `}>
            katartismos
          </span>
          .
          <br />
          <br />
          Historically, it spoke of:
        </h5>
        <br />
        <h5 className={styles.oneHundred}>
          <span
            className={` 
            ${styles.italic} 
            ${styles.sevenHundred} 
            `}>
            FURNISHING
          </span>{' '}
          a courtyard
        </h5>
        <br />
        <h5 className={styles.oneHundred}>
          <span
            className={` 
            ${styles.italic} 
            ${styles.sevenHundred} 
            `}>
            DISCIPLING
          </span>{' '}
          His disciples
        </h5>
        <br />
        <h5 className={styles.oneHundred}>
          <span
            className={` 
            ${styles.italic} 
            ${styles.sevenHundred} 
            `}>
            MENDING
          </span>{' '}
          torn fishing nets
        </h5>
        <br />
        <h5 className={styles.oneHundred}>
          <span
            className={` 
            ${styles.italic} 
            ${styles.sevenHundred} 
            `}>
            RESETTING
          </span>{' '}
          dislocated bones
        </h5>
        <br />
        <h5 className={styles.oneHundred}>
          <span
            className={` 
            ${styles.italic} 
            ${styles.sevenHundred} 
            `}>
            RESTORING
          </span>{' '}
          those caught in sin
        </h5>
        <br />
        <h5 className={styles.oneHundred}>
          <span
            className={` 
            ${styles.italic} 
            ${styles.sevenHundred} 
            `}>
            RECONCILING
          </span>{' '}
          relationships
        </h5>
        <br />
        <h5 className={styles.oneHundred}>
          <span
            className={` 
            ${styles.italic} 
            ${styles.sevenHundred} 
            `}>
            PREPARING
          </span>{' '}
          for military campaigns
        </h5>
        <br />
        <h5 className={styles.oneHundred}>
          <span
            className={` 
            ${styles.italic} 
            ${styles.sevenHundred} 
            `}>
            FITTING OUT
          </span>{' '}
          a naval warship
        </h5>
        <br />
        <h5 className={styles.oneHundred}>
          <span
            className={` 
            ${styles.italic} 
            ${styles.sevenHundred} 
            `}>
            FASHIONING
          </span>{' '}
          a weapon for war
        </h5>
        <br />
        <h5 className={styles.oneHundred}>
          <span
            className={` 
            ${styles.italic} 
            ${styles.sevenHundred} 
            `}>
            CONSTRUCTING
          </span>{' '}
          a war machine
        </h5>
        <br />
        <h5 className={styles.oneHundred}>
          <span
            className={` 
            ${styles.italic} 
            ${styles.sevenHundred} 
            `}>
            TRAINING
          </span>{' '}
          soldiers for combat
        </h5>
        <br />
        <h5 className={styles.oneHundred}>
          <span
            className={` 
            ${styles.italic} 
            ${styles.sevenHundred} 
            `}>
            POSITIONING
          </span>{' '}
          troops in battle array
        </h5>
        <br />
        <br />
        <br />
        <h5 className={`${styles.subtitle} ${textFont.className}`}>I write to:</h5>
        <h3
          style={{ fontStyle: 'italic' }}
          className={`${styles.subtitle} ${textFont.className}`}>
          create a gathering place.
          <br />
          commit to discipleship.
          <br />
          mend His fishing nets.
          <br />
          realign His Body.
          <br />
          restore fallen soldiers.
          <br />
          reconcile the estranged.
          <br />
          prepare His military.
          <br />
          outfit His warships.
          <br />
          fashion weapons of war.
          <br />
          construct war machines.
          <br />
          train His infantry.
          <br />
          and position His troops.
          <br />
          <br />
          <br />
        </h3>
        <h2 className={styles.title}>
          4 1 2 <span style={{ fontWeight: '100', letterSpacing: '3px' }}> BOOKS</span>
        </h2>
        <h5
          style={{ fontStyle: 'italic' }}
          className={` ${styles.text} ${textFont.className}`}>
          …the EQUIPPING of the saints…
        </h5>
        <div style={{ paddingBottom: '175px' }}></div>
      </div>
    </div>
  );
};

export default About;
