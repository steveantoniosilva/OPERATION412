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
        <Heading fontStyle='italic'>
          <span className='mini'>for the</span> Equipping
        </Heading>
        <Spacer size={3} />
        <Heading
          fontStyle='italic'
          level='subtitle'>
          <span className='mini'>of His</span> Saints
        </Heading>
        <Spacer size={3} />
        <Paragraph
          textAlign='center'
          fontStyle='italic'
          size='quote'>
          — Ephesians 4:12 (a)
        </Paragraph>
        <Spacer size={4} />
        <Paragraph textAlign='center'>
          Like a child, I began with a simple question—what does it mean to be{' '}
          <span style={{ fontStyle: 'italic' }}>equipped?</span> What does{' '}
          <span style={{ fontStyle: 'italic' }}>equipping</span> look like? What I discovered didn't change how I
          thought about Ephesians 4:12, it transformed it.
        </Paragraph>
        <Spacer size={1} />
        <Paragraph textAlign='center'>
          The following are historical and biblical expressions of either the words translated as{' '}
          <span style={{ fontStyle: 'italic' }}>equipping (katartismos)</span> or{' '}
          <span style={{ fontStyle: 'italic' }}>to equip (katartizō)</span>.
        </Paragraph>
        <Spacer size={1} />
        <Paragraph textAlign='center'>
          This is what being <span style={{ fontStyle: 'italic' }}>equipped</span> looks like.
        </Paragraph>
        <Spacer size={1} />
        <WordPair
          text='The Mending Fishing Nets'
          italicWord='Mending'
        />
        <WordPair
          text='The Setting of Dislocated Bones'
          italicWord='Setting'
        />
        <WordPair
          text='The Reconciling of Relationships'
          italicWord='Reconciling'
        />
        <WordPair
          text='To Form by Exercise'
          italicWord='Form'
        />
        <WordPair
          text='The Readying of Household Courtyards'
          italicWord='Readying'
        />
        <WordPair
          text='The Outfitting Naval Warships'
          italicWord='Outfitting'
        />
        <WordPair
          text='The Preparing of Slings'
          italicWord='Preparing'
        />
        <WordPair
          text='The Restoring Fallen Sinners'
          italicWord='Restoring'
        />
        <WordPair
          text='The Framing of the Universe'
          italicWord='Framing'
        />
        <WordPair
          text='The Bringing of Order to Cities'
          italicWord='Bringing'
        />
        <WordPair
          text='The Equipping Ships With Rowers'
          italicWord='Equipping'
        />
        <WordPair
          text='The Positioning Armies For Battle'
          italicWord='Positioning'
        />
      </main>
    </>
  );
};

export default Equip;
