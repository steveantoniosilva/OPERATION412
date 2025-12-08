import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/book.module.css';

interface BookProps {
  bookImageUrl: string;
  moreInfoUrl: string;
  alt: string;
}

const Book: React.FC<BookProps> = ({ bookImageUrl, moreInfoUrl, alt }) => {
  return (
    <div className={styles.bookWrapper}>
      <div className={styles.book}>
        <Link href={moreInfoUrl}>
          <div className={styles.cover}>
            <Image
              alt={alt}
              src={bookImageUrl}
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
