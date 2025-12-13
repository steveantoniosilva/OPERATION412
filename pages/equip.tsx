import Head from 'next/head';
import styles from '../styles/equip.module.css';
import Heading from '@/components/Heading';
import WordPair from '@/components/WordPair';

const Equip = () => {
  return (
    <>
      <Head>
        <title>Equip His Army</title>
        <meta
          name='description'
          content='Ephesians 4:12 called. Operation 412 answered: equip believers for the work of ministry; build up the Body of Christ.'
        />
      </Head>

      <main className={styles.container}>
        <Heading fontFamily='cormorant'>
          <span>EQUIP</span>
        </Heading>
        <Heading level='subtitle'>THE SAINTS FOR THE WORK OF MINISTRY</Heading>
        <Heading level='subtitle'>— EPHESIANS 4:12 (a)</Heading>
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


// {/* EQUIP — katartizo / katartismos */}

// <WordPair wordPairTitle="MENDING" wordPairSubtitle="FISHING NETS" />
// <WordPair wordPairTitle="SETTING" wordPairSubtitle="DISLOCATED BONES" />
// <WordPair wordPairTitle="RECONCILING" wordPairSubtitle="RELATIONSHIPS" />
// <WordPair wordPairTitle="FORMING" wordPairSubtitle="BY EXERCISING" />
// <WordPair wordPairTitle="READYING" wordPairSubtitle="HOUSEHOLD COURTYARDS" />
// <WordPair wordPairTitle="OUTFITTING" wordPairSubtitle="NAVAL WARSHIPS" />
// <WordPair wordPairTitle="PREPARING" wordPairSubtitle="SLINGS" />
// <WordPair wordPairTitle="RESTORING" wordPairSubtitle="FALLEN SINNERS" />
// <WordPair wordPairTitle="FRAMING" wordPairSubtitle="THE UNIVERSE" />
// <WordPair wordPairTitle="BRINGING" wordPairSubtitle="ORDER TO CITIES" />
// <WordPair wordPairTitle="EQUIPPING" wordPairSubtitle="SHIPS WITH ROWERS" />
// <WordPair wordPairTitle="POSITIONING" wordPairSubtitle="ARMIES FOR BATTLE" />

// {/* BUILD UP — oikodome */}

// <WordPair wordPairTitle="FORTIFYING" wordPairSubtitle="CITY WALLS" />
// <WordPair wordPairTitle="REPAIRING" wordPairSubtitle="TEMPLE STONES" />
// <WordPair wordPairTitle="EXPANDING" wordPairSubtitle="A HOUSEHOLD" />
// <WordPair wordPairTitle="RESTORING" wordPairSubtitle="A COLLAPSED STRUCTURE" />
// <WordPair wordPairTitle="STRENGTHENING" wordPairSubtitle="A FOUNDATION" />
