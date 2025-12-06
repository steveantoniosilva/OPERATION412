import styles from '../styles/paragraphSpecialFont.module.css';
import { Cormorant_Garamond } from 'next/font/google';

const paragraphSpecialFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic'],
});

interface ParagraphProps {
  paragraph: React.ReactNode; // <-- key change
}

export default function ParagraphSpecialFont({ paragraph }: ParagraphProps) {
  return <h5 className={`${styles.paragraph} ${paragraphSpecialFont.className}`}>{paragraph}</h5>;
}
