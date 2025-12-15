import { ReactNode, CSSProperties } from 'react';
import clsx from 'clsx';
import styles from '../styles/paragraph.module.css';

type TextAlign = 'left' | 'center' | 'justify';
type FontStyle = 'normal' | 'italic';

interface ParagraphProps {
  children: ReactNode;
  textAlign?: TextAlign;
  fontStyle?: FontStyle;
  style?: CSSProperties;
}

export default function Paragraph({ children, textAlign = 'left', fontStyle = 'normal', style }: ParagraphProps) {
  return (
    <p
      className={clsx(styles.base, styles[textAlign], fontStyle === 'italic' ? styles.italic : styles.normal)}
      style={style}>
      {children}
    </p>
  );
}
