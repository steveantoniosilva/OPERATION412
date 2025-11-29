import Head from 'next/head';
import BookMoreInfo from '@/components/BookMoreInfo';

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
          <BookMoreInfo
            title='RECRUITING SHEEP INTO BASIC TRAINING'
            subtitle="What It Means to Be a Soldier in God's Army"
            href='/'
            img='/soldier.png'
            text='description.'
          />
          <h1 style={{ paddingBottom: '555px' }}></h1>
        </div>
      </div>
    </>
  );
};

export default Forged;
