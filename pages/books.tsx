import Head from 'next/head';
import Book from '@/components/Book';
import { books } from '../data/books';


const Books = () => {
  const book = books.dreamBook;
  return (
    <>
      <Head>
        <meta
          name='description'
          content='412BOOKS.COM — Books on EQUIPPING the saints.'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Book
            bookTitle={book.bookTitle}
            bookSubtitle={book.bookSubtitle}
            moreInfoUrl={book.moreInfoUrl}
            bookImageUrl={book.bookImageUrl}
          />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default Books;
