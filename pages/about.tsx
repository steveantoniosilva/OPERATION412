import SiteTitle from '@/components/SiteTitle';
import styles from '../styles/about.module.css';

const About = () => {
  return (
    <div className='main'>
      <div className='containerFlexCentered'>
        <SiteTitle />
        <h4 className={styles.equipTheSaints}>
          EQUIP BELIEVERS FOR THE WORK OF MINISTRY AND BUILD UP THE BODY OF CHRIST
        </h4>
        <h6 className={styles.ephesians}>
          EPHESIANS <span className={styles.span}>4:12</span>
        </h6>
        {/* 
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
        /> */}
      </div>
    </div>
  );
};

export default About;
