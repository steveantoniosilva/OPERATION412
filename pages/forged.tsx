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
            title="CALLED IN THE NIGHT BY A DREAM FROM GOD"
            subtitle='A Journey Through Every Dream in the Bible'
            img='/b-w-lion.png'
          />
        </div>
      </div>
    </>
  );
};

export default Forged;
