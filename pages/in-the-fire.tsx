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
            title='WHEN GOD VISITS US WITH VISIONS'
            subtitle='A Journey Through Visions in the Bible'
            img='/four-heads.png'
          />
          <Book
            title='A CALL TO QUARTERBACK YOUR MARRIAGE'
            subtitle='A Playbook for Men to Win in Marriage'
            img='/qb.png'
          />

          <Book
            title='WHEN PROPHETS HIDE IN CAVES'
            subtitle='God is Calling His Prophets Out of Dark Places'
            img='/cave.png'
          />
          <Book
            title='WE WERE CALLED BY AN INVESTOR'
            subtitle='Investment Principles for Followers of Christ'
            img='/hidden.png'
          />
          <Book
            title='WHEN WOLVES ENTER THE CHURCH'
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
