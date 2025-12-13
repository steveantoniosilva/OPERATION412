import styles from '../styles/titleForPages.module.css';

interface TitleForPagesProps {
  children: React.ReactNode;
}

export default function TitleForPages({ children }: TitleForPagesProps) {
  return <h5 className={styles.titleForPages}>{children}</h5>;
}
