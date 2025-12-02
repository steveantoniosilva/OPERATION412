import Head from 'next/head';
import Book from '@/components/Book';
import { books } from '../data/books';

const Books = () => {
  const book = books.dreamBook;
  return (
    <>
      <Head>
        <title>Finished Books</title>
        <meta
          name='description'
          content='Books'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Book
            title={book.title}
            subtitle={book.subtitle}
            href='/dreams'
            img='/b-w-lion.png'
          />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default Books;
