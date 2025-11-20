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
            title="HE'S BEEN SPEAKING TO US IN DREAMS"
            subtitle='When We Know Him, We Recognize His Voice'
            img='/lion.png'
          />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default Forged;
