import Button from './Button';
import Paragraph from './Paragraph';
import TitleForPages from './Heading';
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
        <TitleForPages>
          {bookTitle} <span>{bookTitleSpan}</span>
        </TitleForPages>

        <br />
        <hr className='hrBookMoreInfo' />
        <br />
        <br />

        <Paragraph>{bookIntro}</Paragraph>

        <Button href={bookAmazonUrl}>FIND ON AMAZON</Button>

        {/* SAME BOOK, NO INTERACTION */}
        <BookCover
          bookImageUrl={bookImageUrl}
          alt={alt}
          clickable={false}
        />
      </div>

      {bookDescription.map((text, i) => (
        <Paragraph key={i}>{text}</Paragraph>
      ))}

      <Button href={bookAmazonUrl}>FIND ON AMAZON</Button>
    </div>
  );
};

export default BookMoreInfo;
