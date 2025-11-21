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
      <div className='main'>
        <div className='container'>
          <Book
            title="WHEN GOD CALLS US OUT OF SLEEP"
            subtitle='A Journey Through the Dreams of the Bible'
            img='/dreams.png'
          />
        </div>
      </div>
    </>
  );
};

export default Forged;
