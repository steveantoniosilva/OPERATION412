import Head from 'next/head';
import Book from '@/components/Book';
import { books } from '../data/books';

const Books = () => {
  const dreamBook = books.dreamBook;

  return (
    <>
      <Head>
        <title>Books</title>
        <meta
          name='description'
          content='412BOOKS.COM — Books to EQUIP the saints.'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Book
            alt={dreamBook.bookTitle}
            moreInfoUrl={dreamBook.moreInfoUrl}
            bookImageUrl={dreamBook.bookImageUrl}
          />
          <div style={{ paddingBottom: '1px' }}></div>
        </div>
      </div>
    </>
  );
};

export default Books;
