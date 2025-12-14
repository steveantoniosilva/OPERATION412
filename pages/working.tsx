import Head from 'next/head';
import styles from '../styles/equipAndBuild.module.css';
import Heading from '@/components/Heading';
import WordPair from '@/components/WordPair';
import Paragraph from '@/components/Paragraph';
import Spacer from '@/components/Spacer';

const Working = () => {
  return (
    <>
      <Head>
        <title>Working His Works</title>
        <meta
          name='description'
          content='…for the work of the ministry… — Ephesians 4:12 (b).'
        />
      </Head>

      <main className={styles.container}>
        <Spacer size={11} />
        <Heading fontFamily='cormorant'>
          <span>WORKING</span>
        </Heading>
        <Spacer size={2} />
        <Heading
          level='subtitle'
          fontFamily='cormorant'>
          THE WORK OF MINISTRY
        </Heading>
        <Spacer size={2} />
        <Paragraph
          fontFamily='cormorant'
          textAlign='center'
          fontStyle='italic'>
          — EPHESIANS 4:12 (b)
        </Paragraph>
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

export default Working;
