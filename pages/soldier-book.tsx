import Head from 'next/head';
import BookMoreInfo from '@/components/BookMoreInfo';
import { books } from '../data/books';
import Book from '@/components/Book';

const SoldierBook = () => {
  const book = books.soldierBook;

  return (
    <>
      <Head>
        <title>{`${book.bookTitle} ${book.bookTitleSpan}`}</title>
        <meta
          name='paragraph'
          content={book.bookTitleSpan}
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <BookMoreInfo
            amazonUrl='/'
            bookTitle={book.bookTitle}
            bookTitleSpan={book.bookTitleSpan}
            paragraph={book.paragraph}
            alt={book.bookTitle}
            bookImageUrl={book.bookImageUrl}
          />
        </div>
      </div>
    </>
  );
};

export default SoldierBook;
