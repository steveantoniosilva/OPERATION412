import Head from 'next/head';
import styles from '../styles/equipAndBuildAndWork.module.css';
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
          content='for the equipping of the saints… — Ephesians 4:12 (a).'
        />
      </Head>

      <main className={styles.container}>
        <Spacer size={11} />
        <Heading fontStyle='italic'>The Equipping</Heading>
        <Spacer size={3} />
        <Heading fontStyle='italic' level='subtitle'>of His Saints</Heading>
        <Spacer size={3} />
        <Paragraph
          textAlign='center'
          fontStyle='italic'>
          — Ephesians 4:12 (a)
        </Paragraph>
        <Spacer size={4} />
        <Paragraph textAlign='center'>
          The Greek words behind this mandate to <span style={{ fontStyle: 'italic' }}>equip</span> the saints is rich
          with historical meaning and application — explore its usage below.
        </Paragraph>
        <Spacer size={1} />
        <WordPair
          firstWord='The Mending'
          secondWord='Fishing Nets'
        />
        <WordPair
          firstWord='The Setting'
          secondWord='of Dislocated Bones'
        />
        <WordPair
          firstWord='The Reconciling'
          secondWord='of Relationships'
        />
        <WordPair
          firstWord='To Form'
          secondWord='by Exercise'
        />
        <WordPair
          firstWord='The Readying'
          secondWord='of Household Courtyards'
        />
        <WordPair
          firstWord='The Outfitting'
          secondWord='Naval Warships'
        />
        <WordPair
          firstWord='The Preparing'
          secondWord='of Slings'
        />
        <WordPair
          firstWord='The Restoring'
          secondWord='Fallen Sinners'
        />
        <WordPair
          firstWord='The Framing'
          secondWord='of the Universe'
        />
        <WordPair
          firstWord='The Bringing'
          secondWord='of Order to Cities'
        />
        <WordPair
          firstWord='The Equipping'
          secondWord='Ships With Rowers'
        />
        <WordPair
          firstWord='The Positioning'
          secondWord='Armies For Battle'
        />
      </main>
    </>
  );
};

export default Equip;
