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
            title="Chosen to Quarterback Your Marriage"
            subtitle='Calling Men to Win the Game That Matters Most'
            img='/quarterback.png'
          />
          <Book
            title="Chosen to Come Out of the Caves"
            subtitle='Calling Prophets to Come Out of Hiding'
            img='/cave.png'
          />
          <Book
            title="Chosen to Wake Up Out of Your Sleep"
            subtitle='Calling Watchmen to Wake Up, Watch and Pray'
            img='/eagle.png'
          />
          <Book
            title="Chosen to Call Out Wolves in the Church"
            subtitle='Calling Sheep to Learn the Tactics of Wolves'
            img='/wolf.png'
          />
          <Book
            title="Chosen to Receive Revelation in Dreams"
            subtitle="Calling Dreamers to Meditate on Dreams in the Bible"
            img='/statue.png'
          />
          <Book
            title="Chosen to Receive Revelation in Visions"
            subtitle="Calling Seers to Meditate on Visions in the Bible"
            img='/leopard.png'
          />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default Books;
