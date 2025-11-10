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
                subtitle='A Call To Come Out of the Cave'
                img='/cave.avif'
              />
            <Book
              title='The Calling of A Watchman'
              subtitle='God is Calling His Watchmen in this Hour'
              img='/eagle.avif'
            />
          <div style={{ marginBottom: '333px' }}></div>
        </div>
      </div>
    </>
  );
};

export default Shepherd;
