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
          {bookTitle} <span style={{fontWeight: '700'}}>{bookTitleSpan}</span>
        </Heading>
        <Spacer size={3} />

        <hr className='hrWide' />
        <Spacer size={3} />
        <Paragraph textAlign='justify'>{bookIntro}</Paragraph>

        <Spacer size={4} />
        <Button href={bookAmazonUrl}>FIND ON AMAZON</Button>
        <Spacer size={6} />

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
