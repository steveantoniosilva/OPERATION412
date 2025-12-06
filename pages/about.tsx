import styles from '../styles/about.module.css';
import Paragraph from '@/components/Paragraph';
import ParagraphCentered from '@/components/ParagraphSpecialFont';
import SiteTitle from '@/components/SiteTitle';
import WordPair from '@/components/WordPair';

const About = () => {
  return (
    <div className='main'>
      <div className='container'>
        <div style={{ paddingTop: '222px' }}></div>
        <SiteTitle />
        <br />
        <ParagraphCentered paragraph='I write books to equip the saints for works of ministry and to build up the body of Christ.' />
        <br />
        <h6 style={{ fontWeight: '100', letterSpacing: '11px', paddingLeft: '22px' }}>EPHESIANS</h6>
        <h1 style={{ fontWeight: '700', letterSpacing: '33px', paddingLeft: '45px' }}>4:12</h1>
        <br />
        <ParagraphCentered
          paragraph='The Greek word-family associated with “equipping” conveyed either making something and someone completely ready for their purpose through restoration, preparation, and/or positioning
          In a historical context, it was used to describe:'
        />
        <br />
        <WordPair
          wordPairTitle='FURNISHING'
          wordPairSubtitle='a courtyard'
        />

        <WordPair
          wordPairTitle='MENDING'
          wordPairSubtitle='fishing nets'
        />

        <WordPair
          wordPairTitle='SETTING'
          wordPairSubtitle='a dislocated bone'
        />

        <WordPair
          wordPairTitle='RESTORING'
          wordPairSubtitle='fallen brothers'
        />

        <WordPair
          wordPairTitle='RECONCILING'
          wordPairSubtitle='relationships'
        />

        <WordPair
          wordPairTitle='PREPARING'
          wordPairSubtitle='military campaigns'
        />

        <WordPair
          wordPairTitle='FITTING OUT'
          wordPairSubtitle='warships'
        />

        <WordPair
          wordPairTitle='FASHIONING'
          wordPairSubtitle='weapons'
        />

        <WordPair
          wordPairTitle='CONSTRUCTING'
          wordPairSubtitle='war machines'
        />

        <WordPair
          wordPairTitle='TRAINING'
          wordPairSubtitle='soldiers'
        />

        <WordPair
          wordPairTitle='POSITIONING'
          wordPairSubtitle='troops'
        />
        <br />
        <br />
        <br />
        <ParagraphCentered paragraph='I WRITE TO:' />
        <ParagraphCentered paragraph='gather His people.' />
        <ParagraphCentered paragraph='mend His nets.' />
        <ParagraphCentered paragraph='align His Body.' />
        <ParagraphCentered paragraph='restore His soldiers.' />
        <ParagraphCentered paragraph='reconcile His estranged.' />
        <ParagraphCentered paragraph='prepare His military.' />
        <ParagraphCentered paragraph='outfit His warships.' />
        <ParagraphCentered paragraph='fashion His weapons.' />
        <ParagraphCentered paragraph='build His Church.' />
        <ParagraphCentered paragraph='train His infantry.' />
        <ParagraphCentered paragraph='position His troops.' />
        <ParagraphCentered paragraph='and equip His saints.' />
        <div style={{ paddingBottom: '175px' }}></div>
      </div>
    </div>
  );
};

export default About;
