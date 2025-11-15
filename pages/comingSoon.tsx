import Head from 'next/head';
import Book from '@/components/Book';

const ComingSoon = () => {
  return (
    <>
      <Head>
        <title>Coming Soon</title>
        <meta
          name='description'
          content='Books Coming Soon by Burning Bush Encounters'
        />
      </Head>
      <div
        style={{
          backgroundColor: '#000',
        }}
        className='backgroundImage'
      />
      <div className='main'>
        <div className='container'>
<h1>coming soon</h1>
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
