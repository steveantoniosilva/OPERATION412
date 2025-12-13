import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from '../styles/paragraph.module.css';
import { cormorant } from '@/library/fonts';

type TextAlign = 'left' | 'center' | 'justify';
type FontFamily = 'default' | 'cormorant';
type FontStyle = 'normal' | 'italic';

interface ParagraphProps {
  children: ReactNode;
  textAlign?: TextAlign;
  fontFamily?: FontFamily;
  fontStyle?: FontStyle;
}

export default function Paragraph({
  children,
  textAlign = 'left',
  fontFamily = 'default',
  fontStyle = 'normal',
}: ParagraphProps) {
  return (
    <p
      className={clsx(
        styles.base,
        styles[textAlign],
        fontFamily === 'cormorant' && cormorant.className,
        fontStyle === 'italic' ? styles.italic : styles.normal
      )}>
      {children}
    </p>
  );
}
