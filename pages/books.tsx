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
          content='Explore my bookshelf at 412 Books.'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Book
            title={book.title}
            subtitle={book.subtitle}
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
