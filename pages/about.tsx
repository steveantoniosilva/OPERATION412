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
        {/* LEFT PANEL — THE CALL */}
        <div className={styles.stripe}>
          <div className={styles.inner}>
            <div className={styles.equipAndBuild}>EQUIP</div>
            <div className={styles.endTimeWarCall}>
              <span>E</span>
              <span>N</span>
              <span>D</span>
              <span style={{ letterSpacing: '0' }}></span>
              <span>T</span>
              <span>I</span>
              <span>M</span>
              <span>E</span>
            </div>
            <div className={styles.armyAndBody}>HIS ARMY</div>
          </div>
        </div>

        {/* RIGHT PANEL — THE MISSION */}
        <div className={styles.stripe}>
          <div className={styles.inner}>
            <div className={styles.equipAndBuild}>BUILD</div>
            <div className={styles.endTimeWarCall}>
              <span style={{ color: 'red', fontWeight: '300' }}>W</span>
              <span style={{ color: 'red', fontWeight: '300' }}>A</span>
              <span style={{ color: 'red', fontWeight: '300' }}>R</span>
              <span style={{ letterSpacing: '0' }}></span>
              <span style={{ color: 'red', fontWeight: '300' }}>C</span>
              <span style={{ color: 'red', fontWeight: '300' }}>A</span>
              <span style={{ color: 'red', fontWeight: '300' }}>L</span>
              <span style={{ color: 'red', fontWeight: '300' }}>L</span>
            </div>
            <div className={styles.armyAndBody}>HIS BODY</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

{
  /* <h5 className={styles.verseText}>
          <span className={styles.emphasis}>EQUIP</span> BELIEVERS FOR THE WORK OF MINISTRY and{' '}
          <span className={styles.emphasis}>BUILD</span> UP THE BODY OF CHRIST.
        </h5> */
}
{
  /* 
        <Paragraph paragraph='The Greek WORD FOR “EQUIP“ WAS historicaLLY USED TO DESCRIBE:' />
        <br />
        <WordPair
          wordPairTitle='MENDING'
          wordPairSubtitle='FISHING NETS'
        />
        <WordPair
          wordPairTitle='SETTING'
          wordPairSubtitle='DISLOCATED BONES'
        />
        <WordPair
          wordPairTitle='RECONCILING'
          wordPairSubtitle='RELATIONSHIPS'
        />
        <WordPair
          wordPairTitle='FORMING'
          wordPairSubtitle='BY EXERCISING'
        />
        <WordPair
          wordPairTitle='READYING'
          wordPairSubtitle='HOUSEHOLD COURTYARDS'
        />
        <WordPair
          wordPairTitle='OUTFITTING'
          wordPairSubtitle='NAVAL WARSHIPS'
        />
        <WordPair
          wordPairTitle='PREPARING'
          wordPairSubtitle='SLINGS'
        />
        <WordPair
          wordPairTitle='RESTORING'
          wordPairSubtitle='FALLEN SINNERS'
        />
        <WordPair
          wordPairTitle='FRAMING'
          wordPairSubtitle='THE UNIVERSE'
        />
        <WordPair
          wordPairTitle='BRINGING'
          wordPairSubtitle='ORDER TO CITIES'
        />
        <WordPair
          wordPairTitle='EQUIPPING'
          wordPairSubtitle='SHIPS WITH ROWERS'
        />
        <WordPair
          wordPairTitle='POSITIONING'
          wordPairSubtitle='ARMIES FOR BATTLE'
        />

        <br />
        <span className={paragraphSpecialFont.and}>&</span>
        <br />
        <br />


        <Paragraph paragraph='The Greek WORD FOR “BUILD UP“ WAS historicaLLY USED TO DESCRIBE:' />
        <WordPair
          wordPairTitle='FORTIFYING'
          wordPairSubtitle='CITY WALLS'
        />

        <WordPair
          wordPairTitle='REPAIRING'
          wordPairSubtitle='TEMPLE STONES'
        />

        <WordPair
          wordPairTitle='EXPANDING'
          wordPairSubtitle='A HOUSEHOLD'
        />

        <WordPair
          wordPairTitle='RESTORING'
          wordPairSubtitle='A COLLAPSED STRUCTURE'
        />

        <WordPair
          wordPairTitle='STRENGTHENING'
          wordPairSubtitle='A FOUNDATION'
        /> */
}
