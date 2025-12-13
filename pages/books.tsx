import Head from 'next/head';
import { books } from '../data/books';
import styles from '../styles/books.module.css';

import BookCover from '@/components/BookCover';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';

const Books = () => {
  const dreamBook = books.dreamBook;
  const soldierBook = books.soldierBook;

  return (
    <>
      <Head>
        <title>OPERATION 412 BOOKS</title>
        <meta
          name='description'
          content='Ephesians 4:12 called. Operation 412 answered: equip believers for the work of ministry; build up the Body of Christ.'
        />
      </Head>

      <div className='main'>
        <div className='container'>
          <div className={styles.topMargin}></div>

          <Heading level='subtitle'>THESE AREN&apos;T</Heading>

          <Heading>
            <span>BOOKS</span>
          </Heading>

          <Heading level='subtitle'>THESE ARE</Heading>

          <Heading>FIELD</Heading>

          <Heading>
            <span>MANUALS</span>
          </Heading>

          <Paragraph align='center'>To Equip You.</Paragraph>
          <Paragraph align='center'>To Build You Up.</Paragraph>

          <Paragraph
            align='center'
            fontFamily='cormorant'>
            Ephesians 4:12 Called.
          </Paragraph>

          <Paragraph
            align='center'
            fontFamily='cormorant'
            fontStyle='italic'>
            Operation 412 Answered.
          </Paragraph>

          <BookCover
            alt={dreamBook.bookTitle}
            bookMoreInfoUrl={dreamBook.bookMoreInfoUrl}
            bookImageUrl={dreamBook.bookImageUrl}
          />

          <BookCover
            alt={soldierBook.bookTitle}
            bookMoreInfoUrl={soldierBook.bookMoreInfoUrl}
            bookImageUrl={soldierBook.bookImageUrl}
          />
        </div>
      </div>
    </>
  );
};

export default Books;
