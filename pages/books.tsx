import Head from 'next/head';
import { books } from '../data/books';
import BookCover from '@/components/BookCover';



const Books = () => {
  const selfControl = books.selfControl;

  return (
    <>
      <Head>
        <meta
          name='description'
          content='412 BOOKS.'
        />
      </Head>

      <div className='main'>
        <div className='containerFlexCentered'>

          <BookCover
            alt={selfControl.bookTitle}
            bookMoreInfoUrl={selfControl.bookMoreInfoUrl}
            bookImageUrl={selfControl.bookImageUrl}
          />
        </div>
      </div>
    </>
  );
};

export default Books;
