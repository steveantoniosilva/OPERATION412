import Head from 'next/head';
import BookMoreInfo from '@/components/BookMoreInfo';

const Dreams = () => {
  return (
    <>
      <Head>
        <title>When Sheep Become Soldiers</title>
        <meta
          name='description'
          content='Dreams'
        />
      </Head>
      <div className='main'>
        <div
          style={{ paddingTop: '222px' }}
          className='container'>
          <BookMoreInfo
            url='/'
            title='Dear Soldier,'
            subtitle='When Sheep Become Soldiers'
            text={`...`}
          />
        </div>
      </div>
    </>
  );
};

export default Dreams;
