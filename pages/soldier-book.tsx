import Head from 'next/head';
import BookMoreInfo from '@/components/BookMoreInfo';
import { books } from '../data/books';

const Soldier = () => {
  const book = books.soldierBook;

  return (
    <>
      <Head>
        <meta
          name='description'
          content={book.subtitle}
        />
      </Head>
      <div className='main'>
        <div
          style={{ paddingTop: '222px' }}
          className='container'>
          <BookMoreInfo
            amazonUrl='/'
            title={book.title}
            subtitle={book.subtitle}
            description={book.description}
          />
        </div>
      </div>
    </>
  );
};

export default Soldier;
