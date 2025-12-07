import Head from 'next/head';
import Book from '@/components/Book';
import { books } from '../data/books';

const ComingSoon = () => {
  const book = books.soldierBook;
  return (
    <>
      <Head>
        <title>Coming Soon</title>
        <meta
          name='description'
          content='Explore our next book coming soon from Mission Four Twelve.'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Book
            bookTitle={book.bookTitle}
            bookSubtitle={book.bookSubtitle}
            moreInfoUrl={book.moreInfoUrl}
            bookImageUrl={book.bookImageUrl}
          />
          {/* <Book
            title='CALLED TO QUARTERBACK YOUR MARRIAGE'
            subtitle='I had to learn what it means to be a husband'
            img='/qb.png'
            /> */}
          {/* <Book
            title='CREATED TO BE AN INSTRUMENT'
            subtitle='DISCOVERING YOU GIFTS & CALLINGS'
            img='/qb.png'
            /> */}
          {/* <Book
              title='WHEN GOD SPEAKS TO US IN VISIONS'
              subtitle='A Journey Through the Visions of the Bible'
              img='/b-w-leopard.png'
            /> */}
          {/* <Book
              title='THE 9 SPIRITUAL GIFTS'
              subtitle='A Journey Through Spiritual Gifts in the Bible'
              img='/b-w-leopard.png'
            /> */}
          {/* <Book
              title='The Equipping of the Saints'
              subtitle='What the word equipping actually means'
              img='/b-w-leopard.png'
            /> */}
          {/* <Book
            title='CALLED BY AN INVESTOR'
            subtitle='Equipping You to Understand Investment Principles - '
            img='/book-cover-blank.png'
          /> */}
          {/* <Book
              title="CALLED TO BE ABOUT MY FATHER'S BUSINESS"
              subtitle='I hear a trumpet calling me to leave the marketplace and enter the ministry????? Equipping You to Apprentice Under the Master'
              img='/book-cover-blank.png'
              /> */}
          {/* <Book
            title='TURNING POINT: When God transforms our darkness into our destiny'
            subtitle='I hear the sound of a trumpet calling Prophets to come out of the caves'
            img='/cave.png'
          /> */}
          {/* <Book
              title='CALLED TO BE A WATCHMAN'
              subtitle='A Call to Wake, Watch and Pray'
              img='/e.png'
            /> */}
          {/* <Book
            title='what is DIVINATION, WITCHCRAFT & IDOLATRY?'
            subtitle='..'
            img='/book-cover-blank.png'
          /> */}
          {/* <Book
            title='what are ANGELS & DEMONS?'
            subtitle='chapter 1 - transformed - these are 2 different names in greek.'
            img='/book-cover-blank.png'
          /> */}
          {/* <Book
            title='CALLED TO PLAY IT WHERE IT LANDS'
            subtitle='I Wanted to learn to adapt to change? use the game of golf somehow?'
            img='/book-cover-blank.png'
          /> */}
          {/* <Book
            title='CALLED TO RUN THE RACE'
            subtitle='how to develop endurance in your walk with God'
            img='/book-cover-blank.png'
          /> */}
          {/* <Book
            title='PURSUE GOD LIKE AN ANT'
            subtitle='GOD POINTS TO THE ANT AS OUR EXAMPLE'
            img='/book-cover-blank.png'
          /> */}
          {/* <Book
            title='HE LEFT THE 99 TO FIND THE 1'
            subtitle='PODCAST?????Stories of Wanderers Who Found their Way'
            img='/wolf.png'
          /> */}
          {/* <h1>make it an audio book?</h1> */}
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
