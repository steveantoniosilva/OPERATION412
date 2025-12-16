import styles from '../styles/wordPair.module.css';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

interface WordPairProps {
  firstWord: string;
  secondWord: string;
}

export default function WordPair({ firstWord, secondWord }: WordPairProps) {
  return (
    <div className={styles.wordPair}>
      <Heading style={{ fontStyle: 'italic' }}>{firstWord}</Heading>
      <Paragraph textAlign='center'>{secondWord}</Paragraph>
    </div>
  );
}
