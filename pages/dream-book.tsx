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
          content={book.bookSubtitle}
        />
      </Head>
      <div className='main'>
        <div
          style={{ paddingTop: '222px' }}
          className='container'>
          <BookMoreInfo
            amazonUrl='/'
            bookTitle={book.bookTitle}
            bookSubtitle={book.bookSubtitle}
            paragraph={book.paragraph}
          />
        </div>
      </div>
    </>
  );
};

export default DreamBook;
