import Button from './Button';
import Paragraph from './Paragraph';
import Heading from './Heading';
import BookCover from '@/components/BookCover';

interface BookProps {
  bookTitle: string;
  bookTitleSpan: string;
  bookIntro: string;
  bookDescription: string[];
  bookAmazonUrl: string;
  alt: string;
  bookImageUrl: string;
}

const BookMoreInfo: React.FC<BookProps> = ({
  bookTitle,
  bookTitleSpan,
  bookDescription,
  bookIntro,
  bookAmazonUrl,
  alt,
  bookImageUrl,
}) => {
  return (
    <div className='main'>
      <div className='containerBookMoreInfo'>
        <Heading
          level='subtitle'
          fontFamily='cormorant'>
          {bookTitle} {bookTitleSpan}
        </Heading>

        <hr className='hrBookMoreInfo' />
        <br />
        <br />
        <br />
        <Paragraph
          textAlign='justify'
          fontFamily='cormorant'>
          {bookIntro}
        </Paragraph>

        <Button href={bookAmazonUrl}>FIND ON AMAZON</Button>

        {/* SAME BOOK, NO INTERACTION */}
        <BookCover
          bookImageUrl={bookImageUrl}
          alt={alt}
          clickable={false}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      {bookDescription.map((text, i) => (
        <Paragraph
          textAlign='justify'
          fontFamily='cormorant'
          key={i}>
          {text}
        </Paragraph>
      ))}
      <br />

      <Button href={bookAmazonUrl}>FIND ON AMAZON</Button>
    </div>
  );
};

export default BookMoreInfo;
