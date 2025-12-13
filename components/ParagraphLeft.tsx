import { ReactNode } from 'react';
import styles from '../styles/paragraphLeft.module.css';

interface ParagraphLeftProps {
  children: ReactNode;
}

export default function ParagraphLeft({ children }: ParagraphLeftProps) {
  return <p className={styles.paragraphLeft}>{children}</p>;
}
