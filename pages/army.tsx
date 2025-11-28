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
            subtitle='What It Means to Be a Soldier in an army'
            img='/gideon.png'
            text='Dreams sent by God have determined destinies, shifted nations, warned kings, protected families, directed prophets, turned ordinary people toward extraordinary callings, and shaped the course of human history.
When God Speaks to Us in Dreams invites you to explore every dream in the Bible—one by one—lingering over the language of dreams and meditating on the messages God hand-delivered in the night.
Each dream is given its own chapter and presented with its surrounding biblical context so God’s Word becomes your guide. The book features twenty-one chapters with twenty-four charcoal illustrations crafted to bring elements from each chapter to life.
Take the journey and discover how God has spoken through dreams for millennia—and how He continues to speak today.
'
          />
          <h1 style={{ paddingBottom: '555px' }}></h1>
        </div>
      </div>
    </>
  );
};

export default Forged;
