import styles from '../styles/bookSubtitle.module.css';
import { Cormorant_Garamond } from 'next/font/google';

const subtitleFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300'],
  style: ['italic'],
});

interface BookSubtitleProps {
  subtitle: string;
}

export default function BookSubtitle({ subtitle }: BookSubtitleProps) {
  return <h5 className={`${styles.subtitle} ${subtitleFont.className}`}>{subtitle}</h5>;
}
