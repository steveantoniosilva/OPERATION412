import Head from 'next/head';
import Book from '@/components/Book';
import { books } from '../data/books';
import styles from '../styles/books.module.css';


const ComingSoon = () => {
  const soldierBook = books.soldierBook;

  return (
    <>
      <Head>
        <title>Coming Soon</title>
        <meta
          name='description'
          content='412BOOKS.COM — Books to equip the saints.'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <div className={styles.topMargin}></div>
          <Book
            alt={soldierBook.bookTitle}
            moreInfoUrl={soldierBook.moreInfoUrl}
            bookImageUrl={soldierBook.bookImageUrl}
          />
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
