import styles from '../styles/wordPair.module.css';

interface WordPairProps {
  wordPairTitle: string;
  wordPairSubtitle: string;
}

export default function WordPair({ wordPairTitle, wordPairSubtitle }: WordPairProps) {
  return (
    <div className={styles.wordPair}>
      <div className={styles.wordPairTitle}>{wordPairTitle}</div>
      <div className={styles.wordPairSubtitle}>{wordPairSubtitle}</div>
    </div>
  );
}
