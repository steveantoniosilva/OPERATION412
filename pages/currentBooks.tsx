import Head from 'next/head';
import Book from '@/components/Book';

const Books = () => {
  return (
    <>
      <Head>
        <title>Books by Burning Bush Encounters</title>
        <meta
          name='description'
          content='Books by Burning Bush Encounters'
        />
      </Head>
      <div
        style={{
          backgroundImage: 'url()',
          backgroundColor: '#000',
        }}
        className='backgroundImage'
      />
      <div className='main'>
        <div className='container'>
          <Book
            title='Every Marriage Needs A Quarterback'
            subtitle='Strategies Every Man Needs to Win the Game That Matters Most'
            img='/q.avif'
          />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default Books;
