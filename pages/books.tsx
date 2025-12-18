import Head from 'next/head';
import { books } from '../data/books';
import BookCover from '@/components/BookCover';
import Spacer from '@/components/Spacer';
import Paragraph from '@/components/Paragraph';
import Author from '@/components/Author';
import { Crimson_Text } from 'next/font/google';
import Heading from '@/components/Heading';

const numbers = Crimson_Text({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
});

const Books = () => {
  const dreamBook = books.dreamBook;

  return (
    <>
      <Head>
        <title>412 Books</title>
        <meta
          name='description'
          content='Welcome to 412 Books — by Operation 412.'
        />
      </Head>

      <div className='main'>
        <div className='container'>
          <Spacer size={9} />

          <BookCover
            alt={dreamBook.bookTitle}
            bookMoreInfoUrl={dreamBook.bookMoreInfoUrl}
            bookImageUrl={dreamBook.bookImageUrl}
          />

          <Spacer size={4} />
          <Author />
          <Spacer size={5} />
        </div>
      </div>
    </>
  );
};

export default Books;
