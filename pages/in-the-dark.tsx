import Head from 'next/head';
import Book from '@/components/Book';

const InTheDark = () => {
  return (
    <>
      <Head>
        <title>In the Dark</title>
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
            title='CALLED TO CONFRONT PHARISEES & SADDUCEES'
            subtitle='Calling Hypocrites to Come to the Alter'
            img='/wolf.png'
          />
          <Book
            title='CALLED TO DIVINATION, WITCHCRAFT & IDOLATRY'
            subtitle='Calling ...'
            img='/wolf.png'
          />
          <Book
            title='CALLED TO STUDY ANGELS & DEMONS'
            subtitle='Calling ...'
            img='/wolf.png'
          />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default InTheDark;
