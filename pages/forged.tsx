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
            title="CALLED IN THE NIGHT BY A DREAM"
            subtitle='Calling Dreamers to Meditate on Dreams in the Bible'
            img='/dreams.png'
          />
        </div>
      </div>
    </>
  );
};

export default Forged;
