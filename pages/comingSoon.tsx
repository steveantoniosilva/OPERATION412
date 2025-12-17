import Head from 'next/head';
import BookCover from '@/components/BookCover';
import { books } from '../data/books';
import Heading from '@/components/Heading';
import Spacer from '@/components/Spacer';
import Paragraph from '@/components/Paragraph';
import Author from '@/components/Author';

const ComingSoon = () => {
  const soldierBook = books.soldierBook;

  return (
    <>
      <Head>
        <title>I Am Writing</title>
        <meta
          name='description'
          content='Next Book — Coming Soon by Operation 412 Books.'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Spacer size={9} />
          <Heading>Coming Soon</Heading>
          <Paragraph textAlign='center'>Currently In The 🔥</Paragraph>

          <Spacer size={6} />

          <BookCover
            alt={soldierBook.bookTitle}
            bookMoreInfoUrl={soldierBook.bookMoreInfoUrl}
            bookImageUrl={soldierBook.bookImageUrl}
          />

          <Spacer size={4} />
          <Author />
          <Spacer size={5} />
        </div>

        {/* <footer className='footer'>&copy; Operation 412 Books</footer> */}
      </div>
    </>
  );
};

export default ComingSoon;
