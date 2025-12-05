import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/book.module.css';
import BookTitle from '@/components/BookTitle';
import BookSubtitle from './BookSubtitle';


interface BookProps {
  bookTitle: string;
  bookSubtitle: string;
  bookImageUrl: string;
  moreInfoUrl: string; // <<— new!
}

const Book: React.FC<BookProps> = ({ bookTitle, bookSubtitle, bookImageUrl, moreInfoUrl }) => {
  return (
    <div className={styles.bookWrapper}>
      <BookTitle bookTitle={bookTitle} />
      <BookSubtitle bookSubtitle={bookSubtitle} />
      <div className={styles.book}>
        <Link href={moreInfoUrl}>
          <div className={styles.cover}>
            <Image
              src={bookImageUrl}
              alt={bookTitle}
              fill
              className={styles.image}
              priority
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Book;
