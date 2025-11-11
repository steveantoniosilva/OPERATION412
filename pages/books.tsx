import Head from 'next/head';
import Book from '@/components/Book';

const Shepherd = () => {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Shepherd of our Faith'
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
              title='Every Marriage Needs A Quarterback'
              subtitle='A Playbook for Men in Marriage'
              img='/q.avif'
            />
              <Book
                title='Prophets Hiding in Caves'
                subtitle='A Call To Prophets in Caves'
                img='/cave.avif'
              />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default Shepherd;
