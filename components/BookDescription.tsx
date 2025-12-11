import { ReactNode } from 'react';
import styles from '../styles/bookDescription.module.css';

interface BookDescriptionProps {
  children: ReactNode;
}

export default function BookDescription({ children }: BookDescriptionProps) {
  return <p className={styles.bookDescription}>{children}</p>;
}
