import Image from 'next/image';
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
  img: string;
  text?: string;
}

const Book: React.FC<BookProps> = ({ title, subtitle, text, img }) => {
  return (
    <div className={styles.bookWrapper}>
      <div className={styles.book}>
        <h6 className={styles.title}>{title}</h6>
        <h5 className={`${styles.subtitle} ${subtitleText.className}`}>{subtitle}</h5>
        <div className={styles.cover}>
          <Image
            src={img}
            alt={title}
            fill
            className={styles.image}
            priority
          />
        </div>
          <h6 className={styles.text}>{text}</h6>
      </div>
    </div>
  );
};

export default Book;
