import Head from 'next/head';
import { books } from '../data/books';
import BookCover from '@/components/BookCover';
import Heading from '@/components/Heading';

const Books = () => {
  const dreamBook = books.dreamBook;
  const soldierBook = books.soldierBook;

  return (
    <>
      <Head>
        <title>OPERATION 412 BOOKS</title>
        <meta
          name='description'
          content='Welcome to my "I AM" Series — Operation 412 Books.'
        />
      </Head>

      <div className='main'>
        <div className='container'>
          <Heading fontFamily='cormorant'>
            <span>“I AM“</span> SERIES
          </Heading>

          <Heading
            level='subtitle'
            fontFamily='cormorant'>
            by OPERATION 412 BOOKS
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
