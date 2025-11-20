import Head from 'next/head';
import Book from '@/components/Book';

const InTheFire = () => {
  return (
    <>
      <Head>
        <title>In the Fire</title>
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
              title='WHEN GOD VISITS US WITH VISIONS'
              subtitle='Calling Seers to Meditate on Visions in the Bible'
              img='/four-heads.png'
            />
          <Book
            title='CALLED TO QUARTERBACK YOUR MARRIAGE'
            subtitle='A Guide for Men on How to Play Quarterback'
            img='/qb.png'
          />
          <Book
            title='I FOUND PROPHETS HIDING IN CAVES'
            subtitle='God is Calling You Out of That Dark Place'
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
            title='CALLED BY AN INVESTOR'
            subtitle='Calling His followers to become investor'
            img='/hidden.png'
          />
          <Book
            title="CALLED INTO MY FATHER'S BUSINESS"
            subtitle='Calling His followers into Business?'
            img='/hidden.png'
          />
          <Book
            title='WHO WERE THE SADDUCEES & PHARISEES?'
            subtitle=''
            img='/hidden.png'
          />
          <Book
            title='WHAT IS DIVINATION, WITCHCRAFT & IDOLATRY?'
            subtitle='Calling ...'
            img='/hidden.png'
          />
          <Book
            title='WHAT ARE ANGELS & DEMONS?'
            subtitle='Calling ...'
            img='/hidden.png'
          />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default InTheFire;
