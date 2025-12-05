import Head from 'next/head';
import BookMoreInfo from '@/components/BookMoreInfo';
import { books } from '../data/books';

const SoldierBook = () => {
  const book = books.soldierBook;

  return (
    <>
      <Head>
        <title>When Sheep Become Soldiers</title>
        <meta
          name='paragraph'
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

export default SoldierBook;
