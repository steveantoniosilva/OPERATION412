import Head from 'next/head';
import BookCover from '@/components/BookCover';
import { books } from '../data/books';
import styles from '../styles/books.module.css';
import TitleForPages from '@/components/TitleForPages';
import Paragraph from '@/components/Paragraph';

const Books = () => {
  const dreamBook = books.dreamBook;
  const soldierBook = books.soldierBook;

  return (
    <>
      <Head>
        <title>OPERATION 412 BOOKS</title>
        <meta
          name='description'
          content='Ephesians 4:12 called. Operation 412 answered: equip believers for the work of ministry; build up the Body of Christ.'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <div className={styles.topMargin}></div>
          <TitleForPages>
            THESE ARE <span>NOT</span>
          </TitleForPages>
          <TitleForPages>
            <span>BOOKS</span>
          </TitleForPages>
          <TitleForPages>
            <span>THEY'RE</span>
          </TitleForPages>
          <TitleForPages>
            FIELD <span>MANUALS</span>
          </TitleForPages>
          <Paragraph
            align='center'
            font='cursive'>
            To
          </Paragraph>
          <BookCover
            alt={dreamBook.bookTitle}
            bookMoreInfoUrl={dreamBook.bookMoreInfoUrl}
            bookImageUrl={dreamBook.bookImageUrl}
          />
          <BookCover
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
