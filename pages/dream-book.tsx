import Head from 'next/head';
import BookMoreInfo from '@/components/BookMoreInfo';
import { books } from '../data/books';

const DreamBook = () => {
  const book = books.dreamBook;

  return (
    <>
      <Head>
        <title>{`${book.bookTitle} ${book.bookTitleSpan}`}</title>
        <meta
          name='description'
          content={book.bookTitle}
        />
      </Head>
      <div className='main'>
        <div
          style={{ paddingTop: '222px' }}
          className='container'>
          <BookMoreInfo
            bookTitle={book.bookTitle}
            bookTitleSpan={book.bookTitleSpan}
            amazonUrl='/'
            paragraph={book.paragraph}
            alt={book.bookTitle}
            bookImageUrl={book.bookImageUrl}
          />
        </div>
      </div>
    </>
  );
};

export default DreamBook;
