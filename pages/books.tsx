import Head from 'next/head';
import Book from '@/components/Book';

const Books = () => {
  return (
    <>
      <Head>
        <title>Books</title>
        <meta
          name='description'
          content='Books'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Book
            title='Encounters with God in the Night'
            subtitle='A Journey Through the Dreams of the Bible'
            href='/dreams'
            img='/b-w-lion.png'
          />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default Books;
