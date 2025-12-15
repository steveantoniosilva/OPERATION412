import Head from 'next/head';
import { books } from '../data/books';
import BookCover from '@/components/BookCover';
import Heading from '@/components/Heading';
import Spacer from '@/components/Spacer';
import Paragraph from '@/components/Paragraph';

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
          <Heading>
            <span>I AM</span>
          </Heading>
          <Paragraph textAlign='center'>( book series )</Paragraph>

          <Spacer size={6} />

          <BookCover
            alt={dreamBook.bookTitle}
            bookMoreInfoUrl={dreamBook.bookMoreInfoUrl}
            bookImageUrl={dreamBook.bookImageUrl}
          />

          <Spacer size={4} />
          <Heading
            level='subtitle'
            fontStyle='italic'>
            by Steve Antonio Silva
          </Heading>
          <Spacer size={5} />
        </div>
      </div>
    </>
  );
};

export default Books;
