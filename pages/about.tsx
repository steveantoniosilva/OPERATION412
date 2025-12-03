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
        <h5 className={` ${styles.text} ${textFont.className}`}>
          <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>EQUIPPING</span> in Greek is{' '}
          <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>katartismos</span>.
          <br />
          Historically, it spoke of:
        </h5>
        <br />
        <h5>preparing gathering places</h5>
        <br />
        <h5>thoroughly training disciples</h5>
        <br />
        <h5>mending torn fishing nets</h5>
        <br />
        <h5>resetting dislocated bones</h5>
        <br />
        <h5>restoring those caught in sin</h5>
        <br />
        <h5>reconciling relationships</h5>
        <br />
        <h5>readying for military campaigns</h5>
        <br />
        <h5>fitting out naval warships</h5>
        <br />
        <h5>fashioning weapons and war machines</h5>
        <br />
        <h5>training soldiers for combat</h5>
        <br />
        <h5>positioning troops in battle array</h5>
        <br />
        <br />
        <br />
        <h5 className={`${styles.subtitle} ${textFont.className}`}>I write to:</h5>
        <h3
          style={{ fontStyle: 'italic' }}
          className={`${styles.subtitle} ${textFont.className}`}>
          create gathering places.
          <br />
          commit to discipleship.
          <br />
          mend His fishing nets.
          <br />
          realign His Body.
          <br />
          restore the fallen.
          <br />
          reconcile the estranged.
          <br />
          ready His military.
          <br />
          outfit His warships.
          <br />
          fashion weapons of war.
          <br />
          train His soldiers.
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
