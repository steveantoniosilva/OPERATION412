import Head from 'next/head';
import Book from '@/components/Book';

const Dreams = () => {
  return (
    <>
      <Head>
        <title>Dreams</title>
        <meta
          name='description'
          content='Dreams'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Book
            title='WHEN GOD SPEAKS TO US IN DREAMS'
            subtitle='A Journey Through the Dreams of the Bible'
            img='/b-w-lion.png'
            href='/'
            text='Dreams sent by God have determined destinies, shifted nations, warned kings, protected families, directed prophets, turned ordinary people toward extraordinary callings, and shaped the course of human history.
When God Speaks to Us in Dreams invites you to explore every dream in the Bible—one by one—lingering over the language of dreams and meditating on the messages God hand-delivered in the night.
Each dream is given its own chapter and presented with its surrounding biblical context so God’s Word becomes your guide. The book features twenty-one chapters with twenty-four charcoal illustrations crafted to bring elements from each chapter to life.
Take the journey and discover how God has spoken through dreams for millennia—and how He continues to speak today—through dreams.

'
          />
          <h1 style={{ paddingBottom: '555px' }}></h1>
        </div>
      </div>
    </>
  );
};

export default Dreams;
