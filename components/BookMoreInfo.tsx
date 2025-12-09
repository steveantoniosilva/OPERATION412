import Link from 'next/link';
import styles from '../styles/bookMoreInfo.module.css';
import BookTitle from '@/components/BookTitle';
import Paragraph from './Paragraph';
import Image from 'next/image';
import bookCoverStyles from '../styles/book.module.css';

interface BookProps {
  bookTitle: string;
  bookTitleSpan: string;
  paragraph: string;
  amazonUrl: string;
  alt: string;
  bookImageUrl: string;
}

const BookMoreInfo: React.FC<BookProps> = ({ bookTitle, bookTitleSpan, paragraph, amazonUrl, alt, bookImageUrl }) => {
  return (
    <div className='main'>
      <div className='containerBookMoreInfo'>
        <BookTitle
          bookTitle={bookTitle}
          bookTitleSpan={bookTitleSpan}
        />
        <br />
        <hr />
        <br />
        <Paragraph paragraph={paragraph} />
        <Link
          href={amazonUrl}
          className={styles.button}>
          FIND ON AMAZON
        </Link>
        <div className={bookCoverStyles.bookWrapper}>
          <div className={bookCoverStyles.bookMoreInfo}>
            <div className={bookCoverStyles.cover}>
              <Image
                alt={alt}
                src={bookImageUrl}
                fill
                className={bookCoverStyles.image}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMoreInfo;
