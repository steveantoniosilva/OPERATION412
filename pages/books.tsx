import Head from 'next/head';
import Book from '@/components/Book';

const Shepherd = () => {
  return (
    <>
      <Head>
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
            title='Called to Be A Prophet'
            subtitle='A Call To Come Out of Hiding'
            img='/cave.avif'
          />
          <Book
            title='Called to Be A Watchman'
            subtitle='A Call to Wake Up & Watch'
            img='/eagle.avif'
          />
          <Book
            title='Called to Be A Quarterback'
            subtitle='A Call to Inspire Men in Marriage'
            img='/q.avif'
          />
          <Book
            title='Called into Business'
            subtitle='A Call to Be Aware of the Snare'
            img='/city.avif'
          />
          <Book
            title='Called In A Moment'
            subtitle='A Call to Turn Aside'
            img='/encounter.avif'
          />
          <Book
            title='Called to Go On A Quest'
            subtitle='A Call into the Unknown'
            img='/stars.avif'
          />
          <Book
            title="Called to Guard God's Sheep"
            subtitle='A Call to Discern Wolves'
            img='/wolf.webp'
          />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default Shepherd;
