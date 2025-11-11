import Head from 'next/head';
import Book from '@/components/Book';

const ComingSoon = () => {
  return (
    <>
      <Head>
        <title>Books Coming Soon</title>
        <meta
          name='description'
          content='Books Coming Soon by Burning Bush Encounters'
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
            title='Call My Prophets Out of Their Caves'
            subtitle='A Call to Come Out of Hiding'
            img='/cave.avif'
          />
          <Book
            title='Call My Watchmen Out of Their Sleep'
            subtitle='A Call to Wake Up, Watch and Pray'
            img='/watchman.jpg'
          />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
