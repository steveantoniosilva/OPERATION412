// components/Book.tsx
import Image from 'next/image';
import styles from '../styles/book.module.css';
import { Lexend } from 'next/font/google';

const bookSubtitleFont = Lexend({
  subsets: ['latin'],
  weight: ['100'],
});

interface BookProps {
  title: string;
  subtitle: string;
  img: string;
}

const Book: React.FC<BookProps> = ({ title, img, subtitle }) => {
  return (
    <div className={styles.bookWrapper}>
      <div className={styles.book}>
        <div>
          <h5 className={styles.title}>{title}</h5>
          <h6 className={`${styles.subtitle} ${bookSubtitleFont.className}`}>{subtitle}</h6>
        </div>
        <div className={styles.cover}>
          <Image
            src={img}
            alt={title}
            fill
            className={styles.image}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Book;
