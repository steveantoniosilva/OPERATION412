import Head from 'next/head';
import BookCover from '@/components/BookCover';
import { books } from '../data/books';
import Spacer from '@/components/Spacer';
import Paragraph from '@/components/Paragraph';
import Author from '@/components/Author';

const Ahead = () => {
  const prophetBook = books.prophetBook;

  return (
    <>
      <Head>
        <title>Ahead</title>
        <meta
          name='description'
          content='Next Book — Coming Soon — View our digital bookshelf at 412 Books.com.'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Spacer size={9} />

          <Paragraph>I hear that prophets are extinct — not because the world or the Church has killed them them all — but because God has said they no longer </Paragraph>

          <Spacer size={6} />

          <BookCover
            clickable={false}
            alt={prophetBook.bookTitle}
            bookMoreInfoUrl={prophetBook.bookMoreInfoUrl}
            bookImageUrl={prophetBook.bookImageUrl}
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

export default Ahead;
