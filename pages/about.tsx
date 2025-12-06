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
        <div style={{ paddingTop: '175px' }}></div>
        <SiteTitle />
        <br />
        <br />
        <br />
        <h6 style={{ fontWeight: '100', letterSpacing: '11px', paddingLeft: '22px' }}>EPHESIANS</h6>
        <h1 style={{ fontWeight: '700', letterSpacing: '33px', paddingLeft: '45px' }}>4:12</h1>
        <br />
        <ParagraphSpecialFont
          paragraph={
            <>
              <span className={paragraphSpecialFontStyles.span}>“</span>
              <br />
              to equip the saints
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
        {/* <Paragraph paragraph='The Greek words for EQUIPPING AND TO EQUIP ARE RICH IN historical MEANING:' />
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
        /> */}
        <div style={{ paddingBottom: '175px' }}></div>
      </div>
    </div>
  );
};

export default About;
