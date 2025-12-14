import Head from 'next/head';
import styles from '../styles/equipAndBuild.module.css';
import Heading from '@/components/Heading';
import WordPair from '@/components/WordPair';
import Paragraph from '@/components/Paragraph';

const Equip = () => {
  return (
    <>
      <Head>
        <title>Building The Body</title>
        <meta
          name='description'
          content='Equip the saints for the work of ministry — Ephesians 4:12 (b).'
        />
      </Head>

      <main className={styles.container}>
        <Heading fontFamily='cormorant'>
          <span>BUILDING</span>
        </Heading>
        <Heading level='subtitle' fontFamily='cormorant'>UP THE BODY OF CHRIST</Heading>
        <Paragraph fontFamily='cormorant' textAlign='center' fontStyle='italic'>— EPHESIANS 4:12 (b)</Paragraph>
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


