import Head from 'next/head';
import BookMoreInfo from '@/components/BookMoreInfo';
import { books } from '../data/books';

const Dreams = () => {
  const book = books.dreamBook;

  return (
    <>
      <Head>
        <title>Dreams of the Bible</title>
        <meta
          name='description'
          content={book.subtitle}
        />
      </Head>
      <div className='main'>
        <div
          style={{ paddingTop: '222px' }}
          className='container'>
          <BookMoreInfo
            amazonUrl='/'
            title={book.title}
            subtitle={book.subtitle}
            description={`Dreams sent by God have determined destinies, shifted nations, warned kings, protected families, directed prophets, turned ordinary people toward extraordinary callings, and shaped the very course of human history and what you and I now call the present.
            
            When God Speaks to Us in Dreams invites you to explore every dream in the Bible—one by one—lingering over the language of dreams and meditating on the messages God hand-delivered in the night.

            Each dream is given its own chapter and presented with its surrounding biblical context so God’s Word becomes your guide. The book features twenty-one chapters with twenty-four charcoal illustrations crafted to bring elements from each chapter to life.

            Take the journey and discover how God has spoken through dreams for millennia—and how He continues to speak today—through dreams.`}
          />
        </div>
      </div>
    </>
  );
};

export default Dreams;
