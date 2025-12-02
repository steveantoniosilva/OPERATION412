import Head from 'next/head';
import Book from '@/components/Book';
import { books } from '../data/books';

const ComingSoon = () => {
  const book = books.soldierBook;
  return (
    <>
      <Head>
        <title>Books Coming Soon</title>
        <meta
          name='description'
          content='Explore our next book coming soon from Mission Four Twelve.'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Book
            title={book.title}
            subtitle={book.subtitle}
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
            title='CALLED BY AN INVESTOR'
            subtitle='A Call to Understand Investment Principles'
            img='/blank-book-cover.png'
          /> */}
          {/* <Book
              title="CALLED TO BE ABOUT MY FATHER'S BUSINESS"
              subtitle='An Apprenticeship Under the Master'
              img='/blank-book-cover.png'
              /> */}
          {/* <Book
            title='CALLED TO COME OUT OF HIDING'
            subtitle='Calling Prophets Out of Hiding'
            img='/cave.png'
          /> */}
          {/* <Book
              title='CALLED TO BE A WATCHMAN'
              subtitle='A Call to Wake, Watch and Pray'
              img='/e.png'
            /> */}
          {/* <Book
                title='MODERN SADDUCEES & PHARISEES?'
                subtitle=''
                img='/blank-book-cover.png'
              /> */}
          {/* <Book
            title='THE 9 SPIRITUAL GIFTS'
            subtitle='..'
            img='/blank-book-cover.png'
          /> */}
          {/* <Book
            title='MODERN DIVINATION, WITCHCRAFT & IDOLATRY?'
            subtitle='..'
            img='/blank-book-cover.png'
          /> */}
          {/* <Book
            title='UNDERSTANDing ANGELS & DEMONS?'
            subtitle='A Call to see into another realm.'
            img='/blank-book-cover.png'
          /> */}
          {/* <Book
            title='CALLED TO PLAY IT WHERE IT LANDS'
            subtitle='I Wanted to learn to adapt to change? use the game of golf somehow?'
            img='/blank-book-cover.png'
          /> */}
          {/* <Book
            title='CALLED TO TAKE A STAND'
            subtitle='I Wanted to STAND FOR SOMETHING - stories of people who stood up and stood for something'
            img='/blank-book-cover.png'
          /> */}
          {/* <Book
            title='CALLED TO RUN THE RACE'
            subtitle='how to develop endurance in your walk with God'
            img='/blank-book-cover.png'
          /> */}
          {/* <Book
            title='CALLED TO STEP OUT OF THE BOAT'
            subtitle='stories of people who got out of the boat'
            img='/blank-book-cover.png'
          /> */}
          {/* <Book
            title='THEY CAUGHT NOTHING ALL NIGHT'
            subtitle='stories of people who caught nothing & found God'
            img='/blank-book-cover.png'
          /> */}
          {/* <Book
            title='BE LIKE THE ANT YOU SLUGGARD'
            subtitle='exploring the ant'
            img='/blank-book-cover.png'
          /> */}
          {/* <Book
            title='HE LEFT THE 99 TO FIND THE 1'
            subtitle='Stories of Wanderers Who Found their Way - Brothers, if any among you wanders from the truth and someone turns him back, 20 let him know that he who turns a sinner from the error of his way will save a soul from death and will cover a multitude of sins.'
            img='/wolf.png'
          /> */}
          {/* <h1>make it an audio book?</h1> */}
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
