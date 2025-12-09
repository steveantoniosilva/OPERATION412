import styles from '../styles/bookTitle.module.css';

interface BookTitleProps {
  bookTitle: string;
  bookTitleSpan: string;
}

export default function BookTitle({ bookTitle, bookTitleSpan }: BookTitleProps) {
  return (
    <h5 className={styles.bookTitle}>
      {bookTitle} <span className={styles.bookTitleSpan}>{bookTitleSpan}</span>
    </h5>
  );
}
