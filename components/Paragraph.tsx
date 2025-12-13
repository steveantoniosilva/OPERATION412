import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from '../styles/paragraph.module.css';
import { cursive } from '@/library/fonts';

type Align = 'left' | 'center';
type Font = 'default' | 'cursive';

interface ParagraphProps {
  children: ReactNode;
  align?: Align;
  font?: Font;
}

export default function Paragraph({ children, align = 'left', font = 'default' }: ParagraphProps) {
  return <p className={clsx(styles.base, styles[align], font === 'cursive' && cursive.className)}>{children}</p>;
}
