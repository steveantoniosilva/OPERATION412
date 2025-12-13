import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from '../styles/paragraph.module.css';
import { cormorant } from '@/library/fonts';

type Align = 'left' | 'center' | 'justify';
type FontFamily = 'default' | 'cormorant';
type FontStyle = 'normal' | 'italic';

interface ParagraphProps {
  children: ReactNode;
  align?: Align;
  fontFamily?: FontFamily;
  fontStyle?: FontStyle;
}

export default function Paragraph({
  children,
  align = 'left',
  fontFamily = 'default',
  fontStyle = 'normal',
}: ParagraphProps) {
  return (
    <p
      className={clsx(
        styles.base,
        styles[align],
        fontFamily === 'cormorant' && cormorant.className,
        fontStyle === 'italic' && styles.italic
      )}>
      {children}
    </p>
  );
}
