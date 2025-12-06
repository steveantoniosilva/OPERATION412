import styles from '../styles/siteTitle.module.css';

export default function SiteTitle() {
  return (
    <h2 className={styles.siteTitle}>
      BOOKS
      <br />
      TO
      <br />
      <span className={styles.span}>EQUIP</span>
      <br />
      THE
      <br />
      SAINTS
    </h2>
  );
}
