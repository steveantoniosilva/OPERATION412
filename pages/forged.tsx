import Head from 'next/head';
import Book from '@/components/Book';

const Forged = () => {
  return (
    <>
      <Head>
        <title>Forged by Fire</title>
        <meta
          name='description'
          content='Burning Bush Encounters'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Book
            title="CALLED TO SEE & INTERPRET DREAMS"
            subtitle='A Journey Through Dreams in the Bible'
            img='/dreams.png'
          />
        </div>
      </div>
    </>
  );
};

export default Forged;
