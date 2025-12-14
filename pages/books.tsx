import Head from 'next/head';
import { books } from '../data/books';
import BookCover from '@/components/BookCover';
import Heading from '@/components/Heading';
import Spacer from '@/components/Spacer';

const Books = () => {
  const dreamBook = books.dreamBook;
  const soldierBook = books.soldierBook;

  return (
    <>
      <Head>
        <title>OPERATION 412 BOOKS</title>
        <meta
          name='description'
          content='Welcome to the "I AM" Series — by Operation 412 Books.'
        />
      </Head>

      <div className='main'>
        <div className='container'>
          <Heading fontFamily='cormorant'>
            THE <span>“I AM“</span> SERIES
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
          <Spacer size={5} />
        </div>
      </div>
    </>
  );
};

export default Books;
