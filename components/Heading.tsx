import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from '../styles/heading.module.css';
import { cormorant } from '@/library/fonts';

type Level = 'title' | 'subtitle';
type FontFamily = 'default' | 'cormorant';
type FontStyle = 'normal' | 'italic';

interface HeadingProps {
  children: ReactNode;
  level?: Level;
  fontFamily?: FontFamily;
  fontStyle?: FontStyle;
}

export default function Heading({
  children,
  level = 'title',
  fontFamily = 'default',
  fontStyle = 'normal',
}: HeadingProps) {
  const Tag = level === 'title' ? 'h1' : 'h2';

  return (
    <Tag
      className={clsx(
        styles.base,
        styles[level],
        fontFamily === 'cormorant' && cormorant.className,
        fontStyle === 'italic' ? styles.italic : styles.normal
      )}>
      {children}
    </Tag>
  );
}
