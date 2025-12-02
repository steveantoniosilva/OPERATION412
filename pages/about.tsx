import styles from '../styles/about.module.css';
import { Cormorant_Garamond } from 'next/font/google';
import { Poppins } from 'next/font/google';

const titleFont = Poppins({
  subsets: ['latin'],
  weight: ['700'],
  style: ['normal', 'italic'],
});

const textFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '700'],
  style: ['normal', 'italic'],
});

const About = () => {
  return (
    <div className='main'>
      <div className='container'>
        <h2 className={styles.title}>The Mission</h2>

        <br />
        <br />

        <h5 className={`${styles.subtitle} ${textFont.className}`}>
          "…the <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>equipping</span> of the saints…"
        </h5>

        <br />
        <br />

        <p style={{ fontWeight: '100' }}>Ephesians</p>
        <h1 style={{ fontWeight: '700', letterSpacing: '9px' }}>4:12</h1>

        <br />
        <br />

        <h5 className={`${styles.subtitle} ${textFont.className}`}>
          The word for <span style={{ fontStyle: 'italic' }}>equipping</span> in Greek is{' '}
          <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>katartismos</span>.
          <br />
          <br />
          It can be used in various contexts, like:
        </h5>

        <br />

        <h5>supplying an army</h5>
        <br />
        <h5>training soldiers</h5>
        <br />
        <h5>preparing a ship</h5>
        <br />
        <h5>setting a bone</h5>
        <br />
        <h5>mending nets</h5>
        <br />
        <h5>restoring what's broken</h5>
        <br />
        <h5>reconciling what's separated</h5>
        <br />
        <br />

        <h5 className={`${styles.subtitle} ${textFont.className}`}>I write to:</h5>

        <h5
          style={{ fontStyle: 'italic' }}
          className={`${styles.subtitle} ${textFont.className}`}>
          supply His army.
          <br />
          train His soldiers.
          <br />
          prepare His vessels.
          <br />
          align His Body.
          <br />
          mend His nets.
          <br />
          restore the broken.
          <br />
          reconcile the lost.
          <br />
          <br />
          <br />
        </h5>

        <h5
          style={{ padding: '0 5em' }}
          className={`${styles.subtitle} ${textFont.className}`}>
          "…the <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>katartismos</span> of the saints for the work
          of ministry, for the building up of the body of Christ…"
        </h5>

        <br />
        <br />
        <br />

        <h6 style={{ fontWeight: '100' }}>Ephesians</h6>
        <h1 style={{ fontWeight: '700', letterSpacing: '9px' }}>4:12</h1>
        <h6 style={{ fontWeight: '100', letterSpacing: '3px' }}>NASB</h6>

        <div style={{ paddingBottom: '175px' }}></div>
      </div>
    </div>
  );
};

export default About;
