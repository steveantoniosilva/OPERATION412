import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from '../styles/heading.module.css';

type Level = 'title' | 'subtitle' | 'huge';
type FontStyle = 'normal' | 'italic';

interface HeadingProps {
  children: ReactNode;
  level?: Level;
  fontStyle?: FontStyle;
}

export default function Heading({ children, level = 'title', fontStyle = 'normal' }: HeadingProps) {
  const Tag = level === 'title' ? 'h1' : 'h2';

  return (
    <Tag className={clsx(styles.base, styles[level], fontStyle === 'italic' ? styles.italic : styles.normal)}>
      {children}
    </Tag>
  );
}
