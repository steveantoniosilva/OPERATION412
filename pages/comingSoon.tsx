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
          content='Ephesians 4:12 called. Operation 412 answered: equip believers for the work of ministry; build up the Body of Christ.'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <div className={styles.topMargin}></div>
          <Book
            alt={soldierBook.bookTitle}
            bookMoreInfoUrl={soldierBook.bookMoreInfoUrl}
            bookImageUrl={soldierBook.bookImageUrl}
          />
        </div>
        <footer className={styles.footer}>&copy; Operation 412</footer>
      </div>
    </>
  );
};

export default ComingSoon;
