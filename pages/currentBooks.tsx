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
            subtitle='A Call to Men to Win the Game That Matters Most'
            img='/quarterback.png'
          />
          <Book
            title="It's Time to Come Out of the Caves"
            subtitle="A Call to Prophets to Come Out of Hiding"
            img='/cave.png'
          />
          <Book
            title="It's Time to Wake Up Out of Your Sleep"
            subtitle="A Call to Watchmen to Wake Up, Watch and Pray"
            img='/eagle.png'
          />
          <Book
            title="It's Time to Hunt Wolves Out of the Church"
            subtitle='A Call to Identify Wolves Who Wear Wool'
            img='/wolf.png'
          />
          <Book
            title="It's Time to Encounter God in Dreams"
            subtitle="A Call to Meditate on Every Dream In the Bible"
            img='/jacobs-ladder.png'
          />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default Books;
