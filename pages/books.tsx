import Head from 'next/head';
import { books } from '../data/books';
import BookCover from '@/components/BookCover';
import Spacer from '@/components/Spacer';
import Author from '@/components/Author';
import { Crimson_Text } from 'next/font/google';

const numbers = Crimson_Text({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
});

const Books = () => {
  const quarterBack = books.quarterbackBook;
  const prophet = books.prophetBook;
  const soldier = books.soldierBook;

  return (
    <>
      <Head>
        <title>412 Books</title>
        <meta
          name='description'
          content='Welcome to 412 Books.'
        />
      </Head>

      <div className='main'>
        <div className='container'>
          <Spacer size={9} />

          <BookCover
            alt={quarterBack.bookTitle}
            bookMoreInfoUrl={quarterBack.bookMoreInfoUrl}
            bookImageUrl={quarterBack.bookImageUrl}
          />

          <Spacer size={15} />

          <BookCover
            alt={prophet.bookTitle}
            bookMoreInfoUrl={prophet.bookMoreInfoUrl}
            bookImageUrl={prophet.bookImageUrl}
          />

          <Spacer size={15} />

          <BookCover
            alt={soldier.bookTitle}
            bookMoreInfoUrl={soldier.bookMoreInfoUrl}
            bookImageUrl={soldier.bookImageUrl}
          />

          <Spacer size={15} />
        </div>
      </div>
    </>
  );
};

export default Books;
