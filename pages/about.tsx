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
        <div style={{ paddingTop: '222px' }}></div>
        <h2 className={styles.title}>MY MISSION</h2>
        <h5
          style={{ padding: '.5em 6em' }}
          className={`${styles.subtitle} ${textFont.className}`}>
          I write books "to <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>equip</span> the saints for works
          of ministry and to build up the body of Christ."
        </h5>
        <br />
        <h6 style={{ fontWeight: '100', letterSpacing: '11px', paddingLeft: '22px' }}>EPHESIANS</h6>
        <h1 style={{ fontWeight: '700', letterSpacing: '33px', paddingLeft: '45px' }}>4:12</h1>
        <br />
        <p>( BSB )</p>
        <br />
        <br />
        <h5 className={` ${styles.text} ${textFont.className}`}>
          Equipping in Greek is <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>katartismos</span>.
          <br />
          It can be used in various contexts, like:
        </h5>
        <br />
        <h4>supplying an army</h4>
        <br />
        <h4>training soldiers</h4>
        <br />
        <h4>preparing a ship</h4>
        <br />
        <h4>setting a bone</h4>
        <br />
        <h4>mending nets</h4>
        <br />
        <h4>restoring what's broken</h4>
        <br />
        <h4>reconciling what's separated</h4>
        <br />
        <br />
        <h5 className={`${styles.subtitle} ${textFont.className}`}>I write to:</h5>
        <h3
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
        </h3>
        <h1>
          MISSION <span style={{ letterSpacing: '5px' }}>412</span>
        </h1>
        <h5
          style={{ fontStyle: 'italic' }}
          className={` ${styles.text} ${textFont.className}`}>
          …the katartismos of the saints…
        </h5>
        <div style={{ paddingBottom: '175px' }}></div>
      </div>
    </div>
  );
};

export default About;
