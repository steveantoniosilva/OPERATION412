import Head from 'next/head';
import BookCover from '@/components/BookCover';
import { books } from '../data/books';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import Spacer from '@/components/Spacer';

const ComingSoon = () => {
  const soldierBook = books.soldierBook;

  return (
    <>
      <Head>
        <title>MY NEXT BOOK</title>
        <meta
          name='description'
          content='Next Book — Coming Soon by Operation 412 Books.'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Heading fontFamily='cormorant'>MY NEXT BOOK</Heading>
          <Heading
            level='subtitle' fontStyle='italic'>
            IN MY <span>I AM</span> SERIES
          </Heading>

          <Spacer size={6} />

          <BookCover
            alt={soldierBook.bookTitle}
            bookMoreInfoUrl={soldierBook.bookMoreInfoUrl}
            bookImageUrl={soldierBook.bookImageUrl}
          />
          <br />
          <br />
          <br />
          <br />
          <Paragraph
            textAlign='center'
            fontFamily='cormorant'>
            by OPERATION 412 BOOKS
          </Paragraph>
        </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        <footer className='footer'>&copy; Operation 412 Books</footer>
      </div>
    </>
  );
};

export default ComingSoon;
