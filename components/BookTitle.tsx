import styles from '../styles/bookTitle.module.css';

interface BookTitleProps {
  bookTitle: string;
}

export default function BookTitle({ bookTitle }: BookTitleProps) {
  return <h5 className={styles.bookTitle}>{bookTitle}</h5>;
}
