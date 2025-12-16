import styles from '../styles/wordPair.module.css';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

interface WordPairProps {
  text: string; // full text with a marker for the italic part
  italicWord: string; // the word or phrase to automatically italicize
}

export default function WordPair({ text, italicWord }: WordPairProps) {
  // Split the text into parts: before, italic, after
  const parts = text.split(italicWord);

  return (
    <div className={styles.wordPair}>
      <Paragraph textAlign='center'>
        {parts[0]}
        <span className={styles.italicWord}>{italicWord}</span>
        {parts[1]}
      </Paragraph>
    </div>
  );
}
