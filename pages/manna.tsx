import Head from 'next/head';
import Book from '@/components/Book';

const Forged = () => {
  return (
    <>
      <Head>
        <title>Forged Books</title>
        <meta
          name='description'
          content='Flint & Steel Books'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Book
            title="WHEN GOD SPEAKS TO US IN DREAMS"
            subtitle='A Journey Through the Dreams of the Bible'
            img='/b-w-lion.png'
          />
        </div>
      </div>
    </>
  );
};

export default Forged;
