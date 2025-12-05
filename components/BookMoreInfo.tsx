import Link from 'next/link';
import styles from '../styles/bookMoreInfo.module.css';
import BookTitle from '@/components/BookTitle';
import BookSubtitle from './BookSubtitle';

interface BookProps {
  title: string;
  subtitle: string;
  description: string;
  amazonUrl: string;
}

const BookMoreInfo: React.FC<BookProps> = ({ title, subtitle, description, amazonUrl }) => {
  return (
    <div className='main'>
      <div className='container'>
        <BookTitle title={title} />
        <BookSubtitle subtitle={subtitle} />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <br />
        <h6 className={styles.text}>{description}</h6>
        <br />
        <br />
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
