import Head from 'next/head';
import Book from '@/components/Book';

const Forged = () => {
  return (
    <>
      <Head>
        <title>Forged</title>
        <meta
          name='description'
          content='Forged'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Book
            title='WHEN GOD SPEAKS TO US IN DREAMS'
            subtitle='A Journey Through the Dreams of the Bible'
            img='/blank-book-cover.png'
          />
        </div>
      </div>
    </>
  );
};

export default Forged;
