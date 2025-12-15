import Head from 'next/head';
import styles from '../styles/equipAndBuild.module.css';
import Heading from '@/components/Heading';
import WordPair from '@/components/WordPair';
import Paragraph from '@/components/Paragraph';
import Spacer from '@/components/Spacer';

const Build = () => {
  return (
    <>
      <Head>
        <title>Build His Body</title>
        <meta
          name='description'
          content='…for the building up of the Body — Ephesians 4:12 (c).'
        />
      </Head>

      <main className={styles.container}>
        <Spacer size={11} />
        <Heading level='huge'>
          <span style={{ fontWeight: '700' }}>BUILD</span>
        </Heading>
        <Spacer size={3} />
        <Heading level='subtitle'>HIS BODY</Heading>
        <Spacer size={4} />
        <Paragraph
          textAlign='center'
          fontStyle='italic'>
          — Ephesians 4:12 (c)
        </Paragraph>
        <Spacer size={3} />
        <Paragraph textAlign='center'>
          The Greek words behind this mandate to <span style={{ fontStyle: 'italic' }}>build</span> His Body is rich
          with historical meaning and application — explore its usage below.
        </Paragraph>
        <Spacer size={1} />
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

export default Build;
