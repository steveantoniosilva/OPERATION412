import Head from 'next/head';
import Book from '@/components/Book';
import { books } from '../data/books';

const ComingSoon = () => {
  const soldierBook = books.soldierBook;

  return (
    <>
      <Head>
        <title>Coming Soon</title>
        <meta
          name='description'
          content='412BOOKS.COM — Books to EQUIP the saints.'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Book
            alt={soldierBook.bookTitle}
            moreInfoUrl={soldierBook.moreInfoUrl}
            bookImageUrl={soldierBook.bookImageUrl}
          />
          <div style={{ paddingBottom: '1px' }}></div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
