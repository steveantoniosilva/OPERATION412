import Head from 'next/head';
import { books } from '../data/books';
import BookCover from '@/components/BookCover';



const Books = () => {
  const yourAdversaryTheDevil = books.yourAdversaryTheDevil;

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
            alt={yourAdversaryTheDevil.bookTitle}
            bookMoreInfoUrl={yourAdversaryTheDevil.bookMoreInfoUrl}
            bookImageUrl={yourAdversaryTheDevil.bookImageUrl}
          />
        </div>
      </div>
    </>
  );
};

export default Books;
