import React, { ReactNode } from 'react';
import Head from 'next/head';
import styles from '../styles/equippingWorkingBuilding.module.css';
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
  headingTop: string;
  headingBottom: string;
  verse: string;
  introParagraphs: ReactNode[];
  wordPairs: WordPairItem[];
};

const ThreeSections = ({
  pageTitle,
  metaDescription,
  headingTop,
  headingBottom,
  verse,
  introParagraphs,
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
        {/* Top offset */}
        <Spacer size={11} />

        {/* Heading top */}
        <Heading fontStyle='italic'>{headingTop}</Heading>

        {/* Heading separation */}
        <Spacer size={3} />

        {/* Heading bottom */}
        <Heading
          fontStyle='italic'
          level='subtitle'>
          {headingBottom}
        </Heading>

        {/* Verse separation */}
        <Spacer size={3} />

        {/* Verse */}
        <Paragraph
          textAlign='center'
          fontStyle='italic'
          size='quote'>
          {verse}
        </Paragraph>

        {/* Intro block separation */}
        <Spacer size={4} />

        {/* Intro paragraphs */}
        {introParagraphs.map((content, index) => (
          <React.Fragment key={index}>
            <Paragraph textAlign='center'>{content}</Paragraph>
            <Spacer size={2} />
          </React.Fragment>
        ))}

        <hr className='hrWide' />

        {/* WordPairs */}
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
