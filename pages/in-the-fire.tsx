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
            title='CALLED TO BE A WATCHMAN'
            subtitle='A Call to Wake, Watch and Pray'
            img='/e.png'
          />
          <Book
            title='CALLED TO SEE & UNDERSTAND VISIONS'
            subtitle='A Journey Through Visions in the Bible'
            img='/four-heads.png'
          />
          <Book
            title='CALLED TO QUARTERBACK YOUR MARRIAGE'
            subtitle='I had to learn what it means to be a husband'
            img='/qb.png'
          />

          <Book
            title='CALLED TO COME OUT OF THE CAVES'
            subtitle='Calling Prophets Out of Hiding'
            img='/cave.png'
          />
          <Book
            title="CALLED TO INHERIT OUR FATHER'S BUSINESS"
            subtitle='A Call to Apprentice Under the Master'
            img='/hidden.png'
          />
          <Book
            title='CALLED BY AN INVESTOR'
            subtitle='A Call to Understand Investment Principles'
            img='/hidden.png'
          />
          <Book
            title='CALLED TO CONFRONT WOLVES'
            subtitle="The Devil Doesn't Wear Prada - he Wears Wool"
            img='/wolf.png'
          />
          <Book
            title='WHO WERE THE SADDUCEES & PHARISEES?'
            subtitle=''
            img='/hidden.png'
          />
          <Book
            title='WHAT by DIVINATION, WITCHCRAFT & IDOLATRY?'
            subtitle='Calling ...'
            img='/hidden.png'
          />
          <Book
            title='CALLED TO UNDERSTAND ANGELS & DEMONS?'
            subtitle='A Call to see into another realm.'
            img='/hidden.png'
          />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default InTheFire;
