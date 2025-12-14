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
        <title>I AM WRITING</title>
        <meta
          name='description'
          content='Next Book — Coming Soon by Operation 412 Books.'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Heading fontFamily='cormorant'>
            <span>I AM</span> WRITING
          </Heading>

          <Spacer size={6} />

          <BookCover
            alt={soldierBook.bookTitle}
            bookMoreInfoUrl={soldierBook.bookMoreInfoUrl}
            bookImageUrl={soldierBook.bookImageUrl}
          />

          <Spacer size={4} />
          <Heading
            level='subtitle'
            fontStyle='italic'
            fontFamily='cormorant'>
            by Steve Antonio Silva
          </Heading>
          <Spacer size={5} />
        </div>
        
        {/* <footer className='footer'>&copy; Operation 412 Books</footer> */}
      </div>
    </>
  );
};

export default ComingSoon;
