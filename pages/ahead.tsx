import Head from 'next/head';
import BookCover from '@/components/BookCover';
import { books } from '../data/books';
import Spacer from '@/components/Spacer';
import Paragraph from '@/components/Paragraph';
import Author from '@/components/Author';

const Ahead = () => {
  const soldierBook = books.soldierBook;

  return (
    <>
      <Head>
        <title>Ahead</title>
        <meta
          name='description'
          content='Next Book — Coming Soon — View our digital bookshelf at 412 Books.com.'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Spacer size={9} />
          <Paragraph>
            Paul wrote to Timothy, “join me in suffering, like a good soldier of Christ Jesus. A soldier refrains from
            entangling himself in civilian affairs, in order to please the one who enlisted him.”
          </Paragraph>

          <Spacer size={1} />

          <Paragraph>
            What does it mean to be a Soldier of Christ? For me this is more than a book. This is a field manual. It's
            not commentary, it's a call to arms.
          </Paragraph>

          <Spacer size={1} />

          <Paragraph>
            When Gideon assembled an army, the Lord let each soldier decide whether to fight or not, “Anyone who
            trembles with fear may turn back and leave…” Twenty-two thousand turned back. Ten thousand remained. The
            army was not weakened. It was purified.
          </Paragraph>

          <Spacer size={1} />

          <Paragraph>Will you be like the 22,000 and turn back?</Paragraph>

          <Spacer size={1} />

          <Paragraph>Or will you be like the 300?</Paragraph>
          <Spacer size={1} />

          <Paragraph>
            If you're like Gideon, you know the Lord has already gone before you to terrorize your enemies and deliver
            them into your hands.
          </Paragraph>
          <Spacer size={1} />

          <Paragraph>This isn't a book. This is a battle-cry. This is where God transforms the bleating of His sheep into the battle-cry of His army.</Paragraph>
          <Spacer size={1} />

          <Paragraph fontStyle='italic'>Semper Paratus</Paragraph>

          <Spacer size={6} />

          <BookCover
            clickable={false}
            alt={soldierBook.bookTitle}
            bookMoreInfoUrl={soldierBook.bookMoreInfoUrl}
            bookImageUrl={soldierBook.bookImageUrl}
          />

          <Spacer size={4} />
          <Author />
          <Spacer size={5} />
        </div>

        {/* <footer className='footer'>&copy; Operation 412 Books</footer> */}
      </div>
    </>
  );
};

export default Ahead;
