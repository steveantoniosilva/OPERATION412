import Image from 'next/image';
import styles from '../styles/book.module.css';

interface BookProps {
  title: string;
  subtitle: string;
  img: string;
}

const Book: React.FC<BookProps> = ({ title, subtitle, img }) => {
  return (
      <div className={styles.bookWrapper}>
      <div className={styles.book}>
        <h6 className={styles.title}>{title}</h6>
        {subtitle && <h6 className={styles.subtitle}>{subtitle}</h6>}
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
