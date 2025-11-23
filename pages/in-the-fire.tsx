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
      <div className='main'>
        <div className='container'>
          <Book
            title='CALLED BY A VISITS US WITH VISIONS'
            subtitle='A Journey Through Visions in the Bible'
            img='/four-heads.png'
          />
          <Book
            title='CALLED TO QUARTERBACK YOUR MARRIAGE'
            subtitle='Calling Men to '
            img='/qb.png'
          />

          <Book
            title='CALLED TO COME OUT OF THE CAVES'
            subtitle='Calling Prophets Out of Hiding'
            img='/cave.png'
          />
          <Book
            title='CALLED BY AN INVESTOR'
            subtitle='Investment Principles for Followers of Christ'
            img='/hidden.png'
          />
          <Book
            title='CALLED TO CONFRONT WOLVES'
            subtitle="The Devil Doesn't Wear Prada - he Wears Wool"
            img='/wolf.png'
          />
          <Book
            title='CALLED BY MY FATHER INTO HIS BUSINESS'
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
            title='WHO ARE ANGELS & DEMONS?'
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
