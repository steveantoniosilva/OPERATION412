import { ReactNode, CSSProperties } from 'react';
import clsx from 'clsx';
import styles from '../styles/heading.module.css';

type Level = 'title' | 'subtitle' | 'huge';
type FontStyle = 'normal' | 'italic';

interface HeadingProps {
  children: ReactNode;
  level?: Level;
  fontStyle?: FontStyle;
  style?: CSSProperties; // <-- add this
}

export default function Heading({ children, level = 'title', fontStyle = 'normal', style }: HeadingProps) {
  const Tag = level === 'title' ? 'h1' : 'h2';

  return (
    <Tag
      className={clsx(styles.base, styles[level], fontStyle === 'italic' ? styles.italic : styles.normal)}
      style={style} // <-- pass it here
    >
      {children}
    </Tag>
  );
}
