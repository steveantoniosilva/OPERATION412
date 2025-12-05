import styles from '../styles/bookTitle.module.css';

interface BookTitleProps {
  title: string;
}

export default function BookTitle({ title }: BookTitleProps) {
  return <h5 className={styles.title}>{title}</h5>;
}
