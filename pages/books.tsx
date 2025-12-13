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

          <Heading>BOOKS</Heading>

          <Heading level='subtitle'>THESE ARE</Heading>

          <Heading>
            <span>FIELD</span>
          </Heading>

          <Heading>
            <span>MANUALS</span>
          </Heading>

          <Heading level='subtitle'>
            <span>TO</span>
          </Heading>

          <Heading>
            <span>EQUIP & BUILD</span>
          </Heading>

          <Heading level='subtitle'>
            <span>EPHESIANS 4:12</span>
            <br /> CALLED
          </Heading>
          <Heading level='subtitle'>
            <span>OPERATION 412</span>
            <br /> ANSWERED
          </Heading>

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
