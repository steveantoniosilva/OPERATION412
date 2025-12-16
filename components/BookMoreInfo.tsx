import Button from './Button';
import Paragraph from './Paragraph';
import Heading from './Heading';
import BookCover from '@/components/BookCover';
import Spacer from '../components/Spacer';

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
        <Heading>
          {bookTitle} <span>{bookTitleSpan}</span>
        </Heading>
        <Spacer size={3} />

        <hr className='hrWide' />
        <Spacer size={3} />
        <Paragraph textAlign='justify'>{bookIntro}</Paragraph>

        <Button href={bookAmazonUrl}>FIND ON AMAZON</Button>

        {/* SAME BOOK, NO INTERACTION */}
        <BookCover
          bookImageUrl={bookImageUrl}
          alt={alt}
          clickable={false}
        />
      </div>
      <Spacer size={3} />

      {bookDescription.map((text, i) => (
          <Paragraph
          textAlign='justify'
          key={i}>
          {text}
        </Paragraph>
      ))}
      <Spacer size={3} />

      <Button href={bookAmazonUrl}>FIND ON AMAZON</Button>
    </div>
  );
};

export default BookMoreInfo;
