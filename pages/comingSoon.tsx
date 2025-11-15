import Head from 'next/head';
import Book from '@/components/Book';

const ComingSoon = () => {
  return (
    <>
      <Head>
        <title>Coming Soon</title>
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
            title="It's Time to Hunt Wolves Out of the Church"
            subtitle='Calling the Church to Discern Wolves'
            img='/wolf.png'
          />
          <Book
            title="It's Time to Dream Dreams from God"
            subtitle="Calling Dreamers to know God's Language of Dreams"
            img='/jacobs-ladder.png'
          />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
