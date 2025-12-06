import styles from '../styles/about.module.css';
import paragraphSpecialFontStyles from '../styles/paragraphSpecialFont.module.css';
import Paragraph from '@/components/Paragraph';
import ParagraphSpecialFont from '@/components/ParagraphSpecialFont';
import SiteTitle from '@/components/SiteTitle';
import WordPair from '@/components/WordPair';

const About = () => {
  return (
    <div className='main'>
      <div className='container'>
        <div style={{ paddingTop: '222px' }}></div>
        <SiteTitle />
        <br />
        <br />
        <br />
        <h6 style={{ fontWeight: '100', letterSpacing: '11px', paddingLeft: '22px' }}>EPHESIANS</h6>
        <h1 style={{ fontWeight: '700', letterSpacing: '33px', paddingLeft: '45px' }}>4:12</h1>
        <ParagraphSpecialFont
          paragraph={
            <>
              <span className={paragraphSpecialFontStyles.span}>“</span>
              <br />
              I write books
              <br />
              to Equip the saints
              <br />
              for works of ministry
              <br />
              and to build up
              <br />
              the body of Christ.
              <br />
              <br />
              <span className={paragraphSpecialFontStyles.span}>“</span>
            </>
          }
        />
        <Paragraph paragraph='The Greek words for EQUIPPING and TO EQUIP were historically used to described:' />
        <br />
        <WordPair
          wordPairTitle='FURNISHING'
          wordPairSubtitle='a courtyard'
        />
        <WordPair
          wordPairTitle='MENDING'
          wordPairSubtitle='A fishing net'
        />
        <WordPair
          wordPairTitle='SETTING'
          wordPairSubtitle='a dislocated bone'
        />
        <WordPair
          wordPairTitle='RECONCILING'
          wordPairSubtitle='A RELATIONSHIP'
        />

        <WordPair
          wordPairTitle='STRENGTHENING'
          wordPairSubtitle='through exercise'
        />

        <WordPair
          wordPairTitle='OUTFITTING'
          wordPairSubtitle='A navel warships'
        />
        <WordPair
          wordPairTitle='READYING'
          wordPairSubtitle='a sling'
        />
        <WordPair
          wordPairTitle='RESTORING'
          wordPairSubtitle='A FALLEN SINNER'
        />
        <WordPair
          wordPairTitle='FRAMING'
          wordPairSubtitle='OF THE UNIVERSE'
        />
        <WordPair
          wordPairTitle='BRINGING'
          wordPairSubtitle='ORDER TO A CITY'
        />
        <WordPair
          wordPairTitle='EQUIPPING'
          wordPairSubtitle='A SHIP WITH ROWERS'
        />
        <WordPair
          wordPairTitle='POSITIONING'
          wordPairSubtitle='troops in battle array'
        />
        <br />
        <br />
        <br />
        <p>I write to:</p>
        <Paragraph paragraph='gather His people.' />
        <Paragraph paragraph='mend His nets.' />
        <Paragraph paragraph='align His Body.' />
        <Paragraph paragraph='reconcile His estranged.' />
        <Paragraph paragraph='train His infantry.' />
        <Paragraph paragraph='outfit His warships.' />
        <Paragraph paragraph='ready His weapons.' />
        <Paragraph paragraph='restore His soldiers.' />
        <Paragraph paragraph='prepare His military.' />
        <Paragraph paragraph='position His troops.' />
        <Paragraph paragraph='equip His saints.' />
        <Paragraph paragraph='AND build His Church.' />

        <div style={{ paddingBottom: '175px' }}></div>
      </div>
    </div>
  );
};

export default About;
