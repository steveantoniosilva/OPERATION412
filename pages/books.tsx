import Head from 'next/head';
import Book from '@/components/Book';

const Books = () => {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Books'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Book
            title='WHEN GOD SPEAKS TO US IN DREAMS'
            subtitle='A Journey Through the Dreams of the Bible'
            img='/b-w-lion.png'
          />
        </div>
      </div>
    </>
  );
};

export default Books;
