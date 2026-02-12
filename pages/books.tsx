import Head from 'next/head';
import { books } from '../data/books';
import BookCover from '@/components/BookCover';
import { Crimson_Text } from 'next/font/google';
import YourAdversaryTheDevil from './your-adversary-the-devil';

const numbers = Crimson_Text({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
});

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


          {/* <BookCover
            alt={prophet.bookTitle}
            bookMoreInfoUrl={prophet.bookMoreInfoUrl}
            bookImageUrl={prophet.bookImageUrl}
          />

          <Spacer size={15} />

          <BookCover
            alt={soldier.bookTitle}
            bookMoreInfoUrl={soldier.bookMoreInfoUrl}
            bookImageUrl={soldier.bookImageUrl}
          />

          <Spacer size={15} /> */}
        </div>
      </div>
    </>
  );
};

export default Books;
