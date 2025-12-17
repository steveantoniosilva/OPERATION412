import Head from 'next/head';
import { books } from '../data/books';
import BookCover from '@/components/BookCover';
import Spacer from '@/components/Spacer';
import Paragraph from '@/components/Paragraph';
import Author from '@/components/Author';
import { Crimson_Text } from 'next/font/google';

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
        <title>I AM (book series)</title>
        <meta
          name='description'
          content='Welcome to the "I AM" Series — by Operation 412 Books.'
        />
      </Head>

      <div className='main'>
        <div className='container'>
          <Spacer size={9} />
          <Paragraph textAlign='center'>BOOKS TO EQUIP.</Paragraph>
          <Paragraph textAlign='center'>BOOKS FOR THE WORK.</Paragraph>
          <Paragraph textAlign='center'>BOOKS TO BUILD.</Paragraph>
          <Paragraph textAlign='center'>BOOKS FOR THE CALL.</Paragraph>

          <Spacer size={6} />

          <Paragraph textAlign='center'>The First Book in the <span className={numbers.className} style={{fontWeight: '700'}}>412</span> Series</Paragraph>

          <Spacer size={6} />

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
