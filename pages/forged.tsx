import Head from 'next/head';
import Book from '@/components/Book';

const Forged = () => {
  return (
    <>
      <Head>
        <title>Forged</title>
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
            title='CALLED TO QUARTERBACK YOUR MARRIAGE'
            subtitle='Calling Men to Win the Game That Matters Most'
            img='/qb.png'
          />
          <Book
            title='CALLED TO BE A PROPHET'
            subtitle='Calling Prophets Out of Caves'
            img='/cave.png'
          />
          <Book
            title='CALLED TO BE A WATCHMAN'
            subtitle='Calling Watchmen Out of Sleep'
            img='/e.png'
          />
          <Book
            title='CALLED TO CONFRONT WOLVES IN THE CHURCH'
            subtitle='Calling Sheep to Discern Wolves in Wool'
            img='/wolf.png'
          />
          <Book
            title='CALLED TO SEE INTO THE REALM OF DREAMS'
            subtitle='Calling Dreamers to Meditate on Dreams in the Bible'
            img='/lion.png'
          />
          <Book
            title='CALLED TO SEE INTO THE REALM OF VISIONS'
            subtitle='Calling Seers to Meditate on Visions in the Bible'
            img='/four-heads.png'
          />
          <Book
            title='CALLED BY AN INVESTOR'
            subtitle='Calling His followers to become investor'
            img='/four-heads.png'
          />
          <Book
            title="CALLED INTO MY FATHER'S BUSINESS"
            subtitle='Calling His followers into Business?'
            img='/four-heads.png'
          />
          <Book
            title="CALLED TO CONFRONT SADDUCEES & PHARISEES"
            subtitle='Calling His followers into Business?'
            img='/four-heads.png'
          />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default Forged;
