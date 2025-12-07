import Head from 'next/head';
import Book from '@/components/Book';
import { books } from '../data/books';


const Books = () => {
  const dreamBook = books.dreamBook;
  const soldierBook = books.soldierBook;
  return (
    <>
      <Head>
        <title>Books</title>
        <meta
          name='description'
          content='412BOOKS.COM — Books on EQUIPPING the saints.'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Book
            bookTitle={dreamBook.bookTitle}
            bookSubtitle={dreamBook.bookSubtitle}
            moreInfoUrl={dreamBook.moreInfoUrl}
            bookImageUrl={dreamBook.bookImageUrl}
          />
          <Book
            bookTitle={soldierBook.bookTitle}
            bookSubtitle={soldierBook.bookSubtitle}
            moreInfoUrl={soldierBook.moreInfoUrl}
            bookImageUrl={soldierBook.bookImageUrl}
          />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default Books;
