import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/book.module.css';
import { Cormorant_Garamond } from 'next/font/google';

const subtitleText = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300'],
  style: ['normal', 'italic'],
});

interface BookProps {
  title: string;
  subtitle: string;
  bookImageUrl: string;
  moreInfoUrl: string; // <<— new!
}

const Book: React.FC<BookProps> = ({ title, subtitle, bookImageUrl, moreInfoUrl }) => {
  return (
    <div className={styles.bookWrapper}>
      <h5 className={styles.title}>{title}</h5>
      <h5 className={`${styles.subtitle} ${subtitleText.className}`}>{subtitle}</h5>

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
