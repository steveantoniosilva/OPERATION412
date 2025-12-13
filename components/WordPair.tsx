import styles from '../styles/wordPair.module.css';
import { cormorant } from '@/library/fonts';
import clsx from 'clsx';

interface WordPairProps {
  firstWord: string;
  secondWord: string;
}

export default function WordPair({ firstWord, secondWord }: WordPairProps) {
  return (
    <div className={styles.wordPair}>
      <div className={clsx(styles.first, cormorant.className)}>{firstWord}</div>
      <div className={styles.second}>{secondWord}</div>
    </div>
  );
}
