import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from '../styles/heading.module.css';

type Level = 'title' | 'subtitle';

interface HeadingProps {
  children: ReactNode;
  level?: Level;
}

export default function Heading({
  children,
  level = 'title',
}: HeadingProps) {
  const Tag = level === 'title' ? 'h1' : 'h2';

  return (
    <Tag className={clsx(styles.base, styles[level])}>
      {children}
    </Tag>
  );
}
