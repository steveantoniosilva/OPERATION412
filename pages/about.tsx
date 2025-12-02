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
        <h2 className={`${styles.title} ${textFont.className}`}>The Mission</h2>
        <br />
        <h5 className={`${styles.subtitle} ${textFont.className}`}>
          "…the <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>equipping</span> of the saints…"
        </h5>
        <h6 style={{ textAlign: 'right', paddingRight: '1em', fontWeight: '100', display: 'inline-block' }}>
          - Ephesians <h1 style={{ fontWeight: '700' }}>4:12</h1>
        </h6>
        <br />
        <br />
        <br />
        <h5 className={`${styles.subtitle} ${textFont.className}`}>
          "…the <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>equipping</span> of the saints…"
          <br />
          <br />
          In Greek:
          <br />
          The word for equipping is <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>katartismos</span> which
          could be used in the following contexts:
          <br />
          <br />
        </h5>
        <h5>An army being supplied via dedicated supply lines</h5>
        <br />
        <h5>A ship being made ready & prepared for its voyage</h5>
        <br />
        <h5>A bone being set back into its proper alignment</h5>
        <h5 className={`${styles.subtitle} ${textFont.className}`}>
          <br />
          This is why I write:
          <br />
          <h5 className={`${styles.subtitle} ${textFont.className}`}>
            To develop supply lines to His Army.
            <br />
            To prepare His Body for the Voyage ahead.
            <br />
            To see His Body set in alignment.
          </h5>
          <br />
          <br />
          <h5 className={`${styles.subtitle} ${textFont.className}`}>
            "…for the <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>equipping</span> of the saints for the
            work of ministry, for the building up of the body of Christ…"
          </h5>
        </h5>
        <br />
        <br />
        <h6 style={{ textAlign: 'right', paddingRight: '1em', fontWeight: '100', display: 'inline-block' }}>
          - Ephesians <h1 style={{ fontWeight: '700' }}>4:12</h1>
        </h6>
        <div style={{ paddingBottom: '222px' }}></div>
      </div>
    </div>
  );
};

export default About;
