import Head from 'next/head';
import Book from '@/components/Book';

const Forged = () => {
  return (
    <>
      <Head>
        <title>Forged</title>
        <meta
          name='description'
          content='Forged'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Book
            title='The Church is Called to Be an Army'
            subtitle="What It Means to Be a Soldier in an army"
                      img='/gideon.png'
                      text='W'
          />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default Forged;
