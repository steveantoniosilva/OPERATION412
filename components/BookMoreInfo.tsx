import Link from 'next/link';
import styles from '../styles/bookMoreInfo.module.css';
import BookTitle from '@/components/BookTitle';
import BookSubtitle from './BookSubtitle';
import Paragraph from './Paragraph'

interface BookProps {
  bookTitle: string;
  bookSubtitle: string;
  paragraph: string;
  amazonUrl: string;
}

const BookMoreInfo: React.FC<BookProps> = ({ bookTitle, bookSubtitle, paragraph, amazonUrl }) => {
  return (
    <div className='main'>
      <div className='container'>
        <BookTitle bookTitle={bookTitle} />
        <BookSubtitle bookSubtitle={bookSubtitle} />
        <hr />
        <br />
        <Paragraph paragraph={paragraph} />
        <Link
          href={amazonUrl}
          className={styles.button}>
          BUY ON AMAZON
        </Link>
      </div>
    </div>
  );
};

export default BookMoreInfo;
