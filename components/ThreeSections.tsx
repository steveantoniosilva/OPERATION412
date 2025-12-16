import React, { ReactNode } from 'react';
import Head from 'next/head';
import styles from '../styles/equippingWorkingBuilding.module.css';
import Heading from '@/components/Heading';
import WordPair from '@/components/WordPair';
import Paragraph from '@/components/Paragraph';
import Spacer from '@/components/Spacer';

/* ============================================================================
   TYPES
   ============================================================================ */

type WordPairItem = {
  text: string;
  italicWord: string;
};

type ThreeSectionsProps = {
  pageTitle: string;
  metaDescription: string;
  heading: string;
  verse: string;
  introParagraphs: ReactNode[];
  wordPairs: WordPairItem[];
};

/* ============================================================================
   THREE SECTIONS TEMPLATE
   Shared layout for: Equip / Work / Build
   ============================================================================ */

const ThreeSections = ({
  pageTitle,
  metaDescription,
  heading,
  verse,
  introParagraphs,
  wordPairs,
}: ThreeSectionsProps) => {
  return (
    <>
      {/* ------------------------------------------------------------------------
         DOCUMENT HEAD
         ------------------------------------------------------------------------ */}
      <Head>
        <title>{pageTitle}</title>
        <meta
          name='description'
          content={metaDescription}
        />
      </Head>

      <main className={styles.container}>
        {/* ----------------------------------------------------------------------
           TOP OFFSET / PAGE ENTRY
           ---------------------------------------------------------------------- */}
        <Spacer size={11} />

        {/* ----------------------------------------------------------------------
           PRIMARY HEADING
           ---------------------------------------------------------------------- */}
        <Heading>{heading}</Heading>

        <Spacer size={3} />

        {/* ----------------------------------------------------------------------
           SCRIPTURE VERSE
           ---------------------------------------------------------------------- */}
        <Paragraph
          textAlign='center'
          fontStyle='italic'
          size='quote'>
          {verse}
        </Paragraph>

        {/* ----------------------------------------------------------------------
           INTRODUCTION BLOCK
           ---------------------------------------------------------------------- */}
        <Spacer size={4} />

        {introParagraphs.map((content, index) => (
          <React.Fragment key={index}>
            <Paragraph textAlign='center'>{content}</Paragraph>
            <Spacer size={2} />
          </React.Fragment>
        ))}

        {/* ----------------------------------------------------------------------
           SECTION DIVIDER
           ---------------------------------------------------------------------- */}
        <hr className='hrWide' />

        {/* ----------------------------------------------------------------------
           WORD PAIRS
           ---------------------------------------------------------------------- */}
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
