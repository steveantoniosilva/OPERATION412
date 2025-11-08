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
            subtitle='A Call to Help Men in Marriage'
            img='/q.avif'
          />
          <Book
            title='Called into Business'
            subtitle='A Call to Be Aware of the Snare'
            img='/city.avif'
          />
          <Book
            title='Called by An Encounter'
            subtitle='Stories of Encounters with God'
            img='/encounter.avif'
          />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default Shepherd;
