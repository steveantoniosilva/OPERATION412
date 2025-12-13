import { ReactNode } from 'react';
import styles from '../styles/paragraphCentered.module.css';

interface ParagraphCenteredProps {
  children: ReactNode;
}

export default function ParagraphCentered({ children }: ParagraphCenteredProps) {
  return <p className={styles.paragraphCentered}>{children}</p>;
}
