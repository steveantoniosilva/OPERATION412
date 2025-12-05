import styles from '../styles/bookSubtitle.module.css';
import { Cormorant_Garamond } from 'next/font/google';

const subtitleFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300'],
  style: ['italic'],
});

interface BookSubtitleProps {
  bookSubtitle: string;
}

export default function BookSubtitle({ bookSubtitle }: BookSubtitleProps) {
  return <h5 className={`${styles.bookSubtitle} ${subtitleFont.className}`}>{bookSubtitle}</h5>;
}
