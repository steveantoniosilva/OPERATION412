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

          <Paragraph>
            I hear that prophets are extinct — not because the world or the Church has killed them them all — but
            because God has said they no longer exist. Like a gallon of milk that has reached its expiration date so too
            prophets have reached their expiration date in the timeline of humanity.
          </Paragraph>
          <Spacer size={2} />
          <Paragraph>
            The only I problem I've run into with this statement is that I can't find it spoken from the mouth of God —
            in His Word that is — I can only hear it out of the mouth of people. Therefore I can only conclude that the
            only voice declaring that they have ceased is not the voice of God.
          </Paragraph>
          <Spacer size={2} />
          <Paragraph>
            But if it's not the voice of God, then who's voice is it?
          </Paragraph>
          <Spacer size={2} />
          <Paragraph>
            As I study history, I see that there is a death assignment against prophets — there is a strategic, coordinated effort to expel them.
          </Paragraph>

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
