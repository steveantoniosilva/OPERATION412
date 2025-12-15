import styles from '../styles/wordPair.module.css';

interface WordPairProps {
  firstWord: string;
  secondWord: string;
}

export default function WordPair({ firstWord, secondWord }: WordPairProps) {
  return (
    <div className={styles.wordPair}>
      <div className={styles.first}>{firstWord}</div>
      <div className={styles.second}>{secondWord}</div>
    </div>
  );
}
