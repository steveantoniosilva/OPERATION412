import Head from 'next/head';
import Book from '@/components/Book';

const Books = () => {
  return (
    <>
      <Head>
        <title>Current Books</title>
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
            title="It's Time to Quarterback Your Marriage"
            subtitle='Calling Men to Win the Game That Matters Most'
            img='/quarterback.png'
          />
          <Book
            title="It's Time to Come Out of the Caves"
            subtitle='Calling Prophets to Come Out of Hiding'
            img='/cave.png'
          />
          <Book
            title="It's Time to Wake Up Out of Your Sleep"
            subtitle='Calling Watchmen to Wake Up, Watch and Pray'
            img='/eagle.png'
          />
          <Book
            title="It's Time for Sheep to Hunt Wolves"
            subtitle='Calling Sheep to Confront Wolves in the Church'
            img='/wolf.png'
          />
          <Book
            title="It's Time for An Outpouring of Dreams"
            subtitle="Calling Dreamers to Meditate on Every Dream in the Bible"
            img='/statue.png'
          />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default Books;
