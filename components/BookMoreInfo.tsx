import Link from 'next/link';
import styles from '../styles/bookMoreInfo.module.css';
import BookTitle from '@/components/BookTitle';
import Paragraph from './Paragraph';

interface BookProps {
  bookTitle: string;
  bookTitleSpan: string;
  paragraph: string;
  amazonUrl: string;
}

const BookMoreInfo: React.FC<BookProps> = ({ bookTitle, bookTitleSpan, paragraph, amazonUrl }) => {
  return (
    <div className='main'>
      <div className='container'>
        <BookTitle bookTitle={bookTitle} bookTitleSpan={bookTitleSpan}  />
        <br />
        <hr />
        <br />
        <Paragraph paragraph={paragraph} />
        <Link
          href={amazonUrl}
          className={styles.button}>
          FIND ON AMAZON
        </Link>
      </div>
    </div>
  );
};

export default BookMoreInfo;
