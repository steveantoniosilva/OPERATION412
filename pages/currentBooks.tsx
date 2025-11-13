import Head from 'next/head';
import Book from '@/components/Book';

const Books = () => {
  return (
    <>
      <Head>
        <title>Books by Burning Bush Encounters</title>
        <meta
          name='description'
          content='Books by Burning Bush Encounters'
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
            title='A Call to Men to Quarterback Their Marriage'
            subtitle='Calling Men to Play the Game That Matters Most'
            img='/quarterback.png'
          />
          <Book
            title='A Call to Prophets to Come Out of Their Caves'
            subtitle="Calling God's Prophets Out of Hiding"
            img='/cave.png'
          />
          <Book
            title='A Call to Watchmen to Come Out of Their Sleep'
            subtitle="Calling God's Watchmen to Wake Up, Watch and Pray"
            img='/eagle.png'
          />
          <Book
            title='A Call to Wolves to Come Out of the Church'
            subtitle='Calling Sheep to Become as Wise as Serpents'
            img='/wolf.png'
          />
          <Book
            title='A Call to Explore Dreams and Visions in the Bible'
            subtitle='Calling on God to Pour Out His Spirit'
            img='/dream.jpg'
          />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default Books;
