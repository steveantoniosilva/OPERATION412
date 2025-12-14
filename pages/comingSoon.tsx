import Head from 'next/head';
import BookCover from '@/components/BookCover';
import { books } from '../data/books';
import styles from '../styles/books.module.css';
import Heading from '@/components/Heading';

const ComingSoon = () => {
  const soldierBook = books.soldierBook;

  return (
    <>
      <Head>
        <title>MY NEXT BOOK</title>
        <meta
          name='description'
          content='Operation 412 Books: My next book—coming soon.'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Heading level='subtitle'>THE NEXT</Heading>

          <Heading>BOOK</Heading>

          <Heading level='subtitle'>IN MY</Heading>

          <Heading fontFamily='cormorant'>
            <span>“I AM“</span>
          </Heading>

          <Heading fontFamily='cormorant'>
            <span>SERIES</span>
          </Heading>

          <Heading
            level='subtitle'
            fontFamily='cormorant'>
            <span>TO</span>
          </Heading>

          <Heading fontFamily='cormorant'>
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
            alt={soldierBook.bookTitle}
            bookMoreInfoUrl={soldierBook.bookMoreInfoUrl}
            bookImageUrl={soldierBook.bookImageUrl}
          />
        </div>
        <footer className={styles.footer}>&copy; Operation 412</footer>
      </div>
    </>
  );
};

export default ComingSoon;
