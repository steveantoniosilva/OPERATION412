import Head from 'next/head';
import Book from '@/components/Book';

const Shepherd = () => {
  return (
    <>
      <Head>
        <title>Books</title>
        <meta
          name='description'
          content='Shepherd of our Faith'
        />
      </Head>
      <div
        style={{
          backgroundImage: 'url()',
          backgroundColor: 'white',
        }}
        className='backgroundImage'
      />
      <div className='main'>
        <div className='container'>
          <Book
            title='Prophets Hiding in Caves'
            img='/cave.avif'
          />
          <Book
            title='Watchman Asleep On the Wall'
            img='/eagle.avif'
          />
          <Book
            title='Every Marriage Needs A Quarterback'
            img='/q.avif'
          />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default Shepherd;
