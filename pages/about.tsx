import paragraphSpecialFont from '../styles/paragraphSpecialFont.module.css';
import Paragraph from '@/components/Paragraph';
import ParagraphSpecialFont from '@/components/ParagraphSpecialFont';
import WordPair from '@/components/WordPair';
import AboutTitle from '@/components/AboutTitle';

const About = () => {
  return (
    <div className='main'>
      <div className='container'>
        <div style={{ paddingTop: '125px' }}></div>
        <AboutTitle />
        <ParagraphSpecialFont
          paragraph={
            <h5>
              was created to <br />
              fulfill God's call
              <br />
              written in
            </h5>
          }
        />
        <br />
        <h6 style={{ fontWeight: '100', letterSpacing: '11px', paddingLeft: '22px' }}>EPHESIANS</h6>
        <h1 style={{ fontWeight: '700', letterSpacing: '33px', paddingLeft: '45px' }}>4:12</h1>
        <ParagraphSpecialFont
          paragraph={
            <>
              <span className={paragraphSpecialFont.quotation}>“</span>
              <br />
              equip believers
              <br />
              for works of ministry
              <span className={paragraphSpecialFont.and}>+</span>
              build up
              <br />
              the body of Christ
              <br />
              <br />
              <span className={paragraphSpecialFont.quotation}>“</span>
            </>
          }
        />

        {/* EQUIP  */}

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

        {/* BUILD UP */}

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
        />

        <div style={{ paddingBottom: '175px' }}></div>
      </div>
    </div>
  );
};

export default About;
