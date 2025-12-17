import Head from 'next/head';
import BookCover from '@/components/BookCover';
import { books } from '../data/books';
import Spacer from '@/components/Spacer';
import Paragraph from '@/components/Paragraph';
import Author from '@/components/Author';

const ComingSoon = () => {
  const soldierBook = books.soldierBook;

  return (
    <>
      <Head>
        <title>My Next Book</title>
        <meta
          name='description'
          content='Next Book — Coming Soon by Operation 412 Books.'
        />
      </Head>
      <div className='main'>
        <div className='container'>
          <Spacer size={9} />
          <Paragraph textAlign='center'>
            The Apostle Paul wrote to Timothy saying, “Join me in suffering, like a good soldier of Christ Jesus. A
            soldier refrains from entangling himself in civilian affairs, in order to please the one who enlisted him.”
          </Paragraph>

          <Spacer size={1} />

          <Paragraph textAlign='center'>
            His loyalty is undivided. His orders are clear. He lives to please the One who enlisted him.
          </Paragraph>

          <Spacer size={1} />

          <Paragraph textAlign='center'>
            This book is a field manual. It is not commentary. It is a call to arms. Each chapter isolates a defining
            trait of the soldier—discipline, obedience, endurance, readiness. Once enlisted, civilian life is forfeited.
          </Paragraph>

          <Spacer size={1} />

          <Paragraph textAlign='center'>
            When Gideon assembled his army, the Lord let each soldier choose his fate, “Anyone who trembles with fear
            may turn back and leave…” Twenty-two thousand turned back. Ten thousand remained. The army was not weakened.
            It was refined.
          </Paragraph>

          <Spacer size={1} />

          <Paragraph textAlign='center'>This isn't for the thousands who tremble and are fearful.</Paragraph>

          <Spacer size={1} />

          <Paragraph textAlign='center'>This is for the 300.</Paragraph>
          <Spacer size={1} />

          <Paragraph
            fontStyle='italic'
            textAlign='center'>
            Semper Paratus
          </Paragraph>

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

export default ComingSoon;
