import Head from 'next/head';
import styles from '../styles/equipAndBuildAndWork.module.css';
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
        <Heading fontStyle='italic'>for the Building</Heading>
        <Spacer size={3} />
        <Heading
          fontStyle='italic'
          level='subtitle'>
          of His Body
        </Heading>
        <Spacer size={3} />
        <Paragraph
          textAlign='center'
          fontStyle='italic'
          size='quote'>
          — Ephesians 4:12 (c)
        </Paragraph>
        <Spacer size={4} />
        <Paragraph textAlign='center'>
          The Greek behind the mandate to <span style={{ fontStyle: 'italic' }}>build</span> His Body is rich with
          historical meaning and application — explore its usage below.
        </Paragraph>
        <Spacer size={1} />
        <WordPair
          firstWord='Fortifying'
          secondWord='City Walls'
        />
        <WordPair
          firstWord='Repairing'
          secondWord='Temple Stones'
        />
        <WordPair
          firstWord='Expanding'
          secondWord='A Household'
        />
        <WordPair
          firstWord='Restoring'
          secondWord='A Collapsed Structure'
        />
        <WordPair
          firstWord='Reinforcing'
          secondWord='A Foundation'
        />
      </main>
    </>
  );
};

export default Build;
