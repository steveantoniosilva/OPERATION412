import Head from 'next/head';
import styles from '../styles/equipAndBuild.module.css';
import Heading from '@/components/Heading';
import WordPair from '@/components/WordPair';
import Paragraph from '@/components/Paragraph';
import Spacer from '@/components/Spacer';

const Equip = () => {
  return (
    <>
      <Head>
        <title>Equip His Saints</title>
        <meta
          name='description'
          content='Equipping the saints… — Ephesians 4:12 (a).'
        />
      </Head>

      <main className={styles.container}>
        <Spacer size={11} />
        <Heading level='huge'>
          <span style={{ fontWeight: '700' }}>EQUIP</span>
        </Heading>
        <Spacer size={3} />
        <Heading level='subtitle'>HIS SAINTS</Heading>
        <Spacer size={4} />
        <Paragraph
          textAlign='center'
          fontStyle='italic'>
          — Ephesians 4:12 (a)
        </Paragraph>
        <Spacer size={3} />
        <Paragraph textAlign='center'>
          The Greek words behind this mandate to <span style={{ fontStyle: 'italic' }}>equip</span> the saints is rich
          with historical meaning and application — explore its usage below.
        </Paragraph>
        <Spacer size={1} />
        <WordPair
          firstWord='MENDING'
          secondWord='FISHING NETS'
        />
        <WordPair
          firstWord='SETTING'
          secondWord='DISLOCATED BONES'
        />
        <WordPair
          firstWord='RECONCILING'
          secondWord='RELATIONSHIPS'
        />
        <WordPair
          firstWord='FORMING'
          secondWord='BY EXERCISING'
        />
        <WordPair
          firstWord='READYING'
          secondWord='HOUSEHOLD COURTYARDS'
        />
        <WordPair
          firstWord='OUTFITTING'
          secondWord='NAVAL WARSHIPS'
        />
        <WordPair
          firstWord='PREPARING'
          secondWord='SLINGS'
        />
        <WordPair
          firstWord='RESTORING'
          secondWord='FALLEN SINNERS'
        />
        <WordPair
          firstWord='FRAMING'
          secondWord='THE UNIVERSE'
        />
        <WordPair
          firstWord='BRINGING'
          secondWord='ORDER TO CITIES'
        />
        <WordPair
          firstWord='EQUIPPING'
          secondWord='SHIPS WITH ROWERS'
        />
        <WordPair
          firstWord='POSITIONING'
          secondWord='ARMIES FOR BATTLE'
        />
      </main>
    </>
  );
};

export default Equip;
