import Head from 'next/head';
import Book from '@/components/Book';
import { books } from '../data/books';
import styles from '../styles/books.module.css';

const Books = () => {
  const dreamBook = books.dreamBook;
  const soldierBook = books.soldierBook;

  return (
    <>
      <Head>
        <title>Books</title>
        <meta
          name='description'
          content='412BOOKS.COM — Books to equip the saints.'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <div className={styles.topMargin}></div>
          <Book
            alt={dreamBook.bookTitle}
            bookMoreInfoUrl={dreamBook.bookMoreInfoUrl}
            bookImageUrl={dreamBook.bookImageUrl}
          />
          <Book
            alt={soldierBook.bookTitle}
            bookMoreInfoUrl={soldierBook.bookMoreInfoUrl}
            bookImageUrl={soldierBook.bookImageUrl}
          />
        </div>
      </div>
    </>
  );
};

export default Books;
