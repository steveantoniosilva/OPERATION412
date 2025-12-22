import Head from 'next/head';
import BookMoreInfo from '@/components/BookMoreInfo';
import { books } from '../data/books';
import Spacer from '@/components/Spacer';

const ProphetBook = () => {
  const book = books.prophetBook;

  return (
    <>
      <Head>
        <title>{book.bookTitle}</title>
        <meta
          name='description'
          content={book.bookTitle}
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Spacer size={16} />

          <BookMoreInfo
            bookAmazonUrl='/'
            bookTitle={book.bookTitle}
            bookDescription={book.bookDescription}
            alt={book.bookTitle}
            bookImageUrl={book.bookImageUrl}
          />
        </div>
      </div>
    </>
  );
};

export default ProphetBook;
