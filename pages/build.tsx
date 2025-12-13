import Head from 'next/head';
import styles from '../styles/equip.module.css';
import Heading from '@/components/Heading';
import WordPair from '@/components/WordPair';

const Equip = () => {
  return (
    <>
      <Head>
        <title>BUILD HIS BODY</title>
        <meta
          name='description'
          content='Ephesians 4:12 called. Operation 412 answered: equip believers for the work of ministry; build up the Body of Christ.'
        />
      </Head>

      <main className={styles.container}>
        <Heading fontFamily='cormorant'>
          <span>BUILD</span>
        </Heading>
        <Heading level='subtitle'>UP THE BODY OF CHRIST</Heading>
        <Heading level='subtitle'>— EPHESIANS 4:12 (b)</Heading>
        <WordPair
          firstWord='FORTIFYING'
          secondWord='CITY WALLS'
        />
        <WordPair
          firstWord='REPAIRING'
          secondWord='TEMPLE STONES'
        />
        <WordPair
          firstWord='EXPANDING'
          secondWord='A HOUSEHOLD'
        />
        <WordPair
          firstWord='RESTORING'
          secondWord='A COLLAPSED STRUCTURE'
        />
        <WordPair
          firstWord='REINFORCING'
          secondWord='A FOUNDATION'
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
