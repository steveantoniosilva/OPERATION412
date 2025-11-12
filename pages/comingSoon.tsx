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
          backgroundColor: '#000',
        }}
        className='backgroundImage'
      />
      <div className='main'>
        <div className='container'>
          <Book
            title='A Call to Prophets to Come Out of Their Caves'
            subtitle="It's Time to Come Out of Hiding"
            img='/cave.png'
          />
          <Book
            title='A Call to Watchmen to Come Out of Their Sleep'
            subtitle="It's Time to Wake Up, Watch and Pray"
            img='/eagle.png'
          />
          <Book
            title='A Call to Confront Wolves in The Church'
            subtitle="The Devil Doesn't Wear Prada, He Wears Wool"
            img='/wolf.png'
          />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
