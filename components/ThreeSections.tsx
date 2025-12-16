import Head from 'next/head';
import styles from '../styles/equipAndBuildAndWork.module.css';
import Heading from '@/components/Heading';
import WordPair from '@/components/WordPair';
import Paragraph from '@/components/Paragraph';
import Spacer from '@/components/Spacer';

type WordPairItem = {
  text: string;
  italicWord: string;
};

type ThreeSectionsProps = {
  pageTitle: string;
  metaDescription: string;
  title: string;
  subtitle: string;
  verse: string;
  intro?: string;
  wordPairs: WordPairItem[];
};

const ThreeSections = ({
  pageTitle,
  metaDescription,
  title,
  subtitle,
  verse,
  intro,
  wordPairs,
}: ThreeSectionsProps) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name='description'
          content={metaDescription}
        />
      </Head>

      <main className={styles.container}>
        <Spacer size={11} />

        <Heading fontStyle='italic'>
          <span className='mini'>for the</span> {title}
        </Heading>

        <Spacer size={3} />

        <Heading
          fontStyle='italic'
          level='subtitle'>
          <span className='mini'>of His</span> {subtitle}
        </Heading>

        <Spacer size={3} />

        <Paragraph
          textAlign='center'
          fontStyle='italic'
          size='quote'>
          {verse}
        </Paragraph>

        {intro && (
          <>
            <Spacer size={4} />
            <Paragraph textAlign='center'>{intro}</Paragraph>
          </>
        )}

        <Spacer size={1} />

        {wordPairs.map((pair, index) => (
          <WordPair
            key={index}
            text={pair.text}
            italicWord={pair.italicWord}
          />
        ))}
      </main>
    </>
  );
};

export default ThreeSections;
