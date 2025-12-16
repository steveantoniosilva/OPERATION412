import Head from 'next/head';
import styles from '../styles/equipAndBuildAndWork.module.css';
import Heading from '@/components/Heading';
import WordPair from '@/components/WordPair';
import Paragraph from '@/components/Paragraph';
import Spacer from '@/components/Spacer';

const Work = () => {
  return (
    <>
      <Head>
        <title>Work His Works</title>
        <meta
          name='description'
          content='…for the work of the ministry… — Ephesians 4:12 (b).'
        />
      </Head>

      <main className={styles.container}>
        <Spacer size={11} />
        <Heading fontStyle='italic'>for the Work</Heading>
        <Spacer size={3} />
        <Heading
          fontStyle='italic'
          level='subtitle'>
          of His Ministry
        </Heading>
        <Spacer size={3} />
        <Paragraph
          textAlign='center'
          fontStyle='italic'
          size='quote'>
          — Ephesians 4:12 (b)
        </Paragraph>
        <Spacer size={4} />
        <Paragraph textAlign='center'>
          The Greek words behind this mandate to carry out{' '}
          <span style={{ fontStyle: 'italic' }}>the work of the ministry</span> is rich with historical meaning and
          application — explore its usage below.
        </Paragraph>
        <Spacer size={1} />
        <WordPair
          firstWord='...'
          secondWord='...'
        />
      </main>
    </>
  );
};

export default Work;
