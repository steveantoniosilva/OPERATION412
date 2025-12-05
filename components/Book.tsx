import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/book.module.css';
import BookTitle from '@/components/BookTitle';
import BookSubtitle from './BookSubtitle';


interface BookProps {
  title: string;
  subtitle: string;
  bookImageUrl: string;
  moreInfoUrl: string; // <<— new!
}

const Book: React.FC<BookProps> = ({ title, subtitle, bookImageUrl, moreInfoUrl }) => {
  return (
    <div className={styles.bookWrapper}>
      <BookTitle title={title} />
      <BookSubtitle subtitle={subtitle} />
      <div className={styles.book}>
        <Link href={moreInfoUrl}>
          <div className={styles.cover}>
            <Image
              src={bookImageUrl}
              alt={title}
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
