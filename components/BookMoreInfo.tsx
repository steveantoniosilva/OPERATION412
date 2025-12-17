import Button from './Button';
import Paragraph from './Paragraph';
import Heading from './Heading';
import BookCover from '@/components/BookCover';
import Spacer from '../components/Spacer';
import React from 'react';

interface BookProps {
  bookTitle: string;
  bookTitleSpan: string;
  bookDescription: string[];
  bookAmazonUrl: string;
  alt: string;
  bookImageUrl: string;
}

const BookMoreInfo: React.FC<BookProps> = ({
  bookTitle,
  bookTitleSpan,
  bookDescription,
  bookAmazonUrl,
  alt,
  bookImageUrl,
}) => {
  return (
    <div className='main'>
      <div className='containerBookMoreInfo'>
        <Heading>
          {bookTitle} {bookTitleSpan}
        </Heading>

        <Spacer size={4} />

        <hr className='hrNarrow' />
        <Spacer size={4} />
        {bookDescription.map((text, i) => (
          <React.Fragment key={i}>
            <Paragraph textAlign='justify'>{text}</Paragraph>
            {i !== bookDescription.length - 1 && <Spacer size={2} />}
          </React.Fragment>
        ))}

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
    </div>
  );
};

export default BookMoreInfo;
