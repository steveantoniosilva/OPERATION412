import styles from '../styles/paragraphCentered.module.css';
import { Cormorant_Garamond } from 'next/font/google';

const paragraphSpecialFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '700'],
  style: ['normal', 'italic'],
});

interface ParagraphProps {
  paragraph: string;
}

export default function ParagraphSpecialFont({ paragraph }: ParagraphProps) {
  return <h5 className={`${styles.paragraph} ${paragraphSpecialFont.className}`}>{paragraph}</h5>;
}
