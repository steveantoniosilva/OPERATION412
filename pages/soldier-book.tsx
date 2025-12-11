import Head from 'next/head';
import BookMoreInfo from '@/components/BookMoreInfo';
import { books } from '../data/books';

const SoldierBook = () => {
  const book = books.soldierBook;

  return (
    <>
      <Head>
        <title>{`${book.bookTitle} ${book.bookTitleSpan}`}</title>
        <meta
          name='description'
          content={`${book.bookTitle} ${book.bookTitleSpan}`}
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <BookMoreInfo
            bookAmazonUrl='/'
            bookTitle={book.bookTitle}
            bookTitleSpan={book.bookTitleSpan}
            bookDescription={book.bookDescription}
            bookIntro={book.bookIntro}
            alt={book.bookTitle}
            bookImageUrl={book.bookImageUrl}
          />
        </div>
      </div>
    </>
  );
};

export default SoldierBook;
