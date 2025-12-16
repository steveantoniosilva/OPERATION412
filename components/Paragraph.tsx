import { ReactNode, CSSProperties } from 'react';
import clsx from 'clsx';
import styles from '../styles/paragraph.module.css';

type TextAlign = 'left' | 'center' | 'justify';
type FontStyle = 'normal' | 'italic';
type Size = 'base' | 'quote';

interface ParagraphProps {
  children: ReactNode;
  textAlign?: TextAlign;
  fontStyle?: FontStyle;
  size?: Size;
  style?: CSSProperties;
}


export default function Paragraph({
  children,
  textAlign = 'left',
  fontStyle = 'normal',
  size = 'base',
  style,
}: ParagraphProps) {
  return (
    <p
      className={clsx(
        styles.base,
        styles[textAlign],
        styles[size],
        fontStyle === 'italic' ? styles.italic : styles.normal
      )}
      style={style}>
      {children}
    </p>
  );
}
