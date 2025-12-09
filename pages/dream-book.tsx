import Head from 'next/head';
import BookMoreInfo from '@/components/BookMoreInfo';
import { books } from '../data/books';

const DreamBook = () => {
  const book = books.dreamBook;

  return (
    <>
      <Head>
        <title>A Book About Dreams</title>
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
          />
        </div>
      </div>
    </>
  );
};

export default DreamBook;
