import Head from 'next/head';
import Book from '@/components/Book';

const Forged = () => {
  return (
    <>
      <Head>
        <title>Forged</title>
        <meta
          name='description'
          content='Flint & Steel Books'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Book
            title="CALLED TO SEE & INTERPRET DREAMS"
            subtitle='Meditate on Every Dream in the Bible'
            img='/b-w-lion.png'
          />
        </div>
      </div>
    </>
  );
};

export default Forged;
