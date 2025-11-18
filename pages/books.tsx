import Head from 'next/head';
import Book from '@/components/Book';

const Books = () => {
  return (
    <>
      <Head>
        <title>Books</title>
        <meta
          name='description'
          content='Burning Bush Encounters'
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
            title='Called to Quarterback Your Marriage'
            subtitle='Calling Men to Win the Game That Matters Most'
            img='/quarterback.png'
          />
          <Book
            title='Called to Be A Prophet'
            subtitle='Calling Prophets to Come Out of Hiding'
            img='/cave.png'
          />
          <Book
            title='Called to Be a Watchman'
            subtitle='Calling Watchmen to Wake Up, Watch and Pray'
            img='/eagle.png'
          />
          <Book
            title='Called to Confront Wolves in the Church'
            subtitle='Calling Sheep to Discern Wolves in Wool'
            img='/wolf.png'
          />
          <Book
            title='Called to See & Interpret Dreams'
            subtitle='Calling Dreamers to Understand the Language of Dreams'
            img='/daniels-statue.png'
          />
          <Book
            title='Called to See & Interpret Visions'
            subtitle='Calling Seers to Understand the Language of Visions'
            img='/leopard.png'
          />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default Books;
