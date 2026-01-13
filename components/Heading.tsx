import { ReactNode } from 'react';
import styles from '../styles/heading.module.css';

interface HeadingProps {
  children: ReactNode;
}

export default function Heading({ children }: HeadingProps) {
  return <h1 className={styles.title}>{children}</h1>;
}
