// components/Book.tsx
import Image from 'next/image';
import styles from '../styles/book.module.css';

interface BookProps {
  title: string;
  img: string;
  by?: string;
}

const Book: React.FC<BookProps> = ({ title, img, by }) => {
  return (
    <div className={styles.bookWrapper}>
      <div className={styles.book}>
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
      <div className={styles.info}>
        <h3>{title}</h3>
        {by && <p>{by}</p>}
      </div>
    </div>
  );
};

export default Book;
