import styles from '../styles/paragraph.module.css';

interface ParagraphProps {
  paragraph: string;
}

export default function Paragraph({ paragraph }: ParagraphProps) {
  return <p className={styles.paragraph}>{paragraph}</p>;
}
