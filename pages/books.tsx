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
          backgroundPosition: '38% 0%',
          backgroundColor: 'rgba(1,1,1,.5)',
        }}
        className='backgroundImage'
      />
      <div className='main'>
        <div className='container'>
          <div style={{ marginTop: '222px' }}></div>
          <Book
            title='Prophets Hiding in Caves'
            img='/cave.avif'
            by='by Burning Bush Encounters'
          />
          <Book
            title='Watchman Asleep On the Wall'
            img='/asleep.webp'
            by='by Burning Bush Encounters'
          />
          <Book
            title='Every Marriage Needs A Quarterback'
            img='/q.avif'
            by='by Burning Bush Encounters'
          />
          <div style={{ marginTop: '222px' }}></div>
        </div>
      </div>
    </>
  );
};

export default Shepherd;
