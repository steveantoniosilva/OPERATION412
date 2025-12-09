import styles from '../styles/siteTitle.module.css';

export default function SiteTitle() {
  return (
    <>
      <div className={styles.mobileContainer}>
        <h1 className={styles.operationMobile}>OPERATION</h1>
        <h6 className={styles.fourTwelveMobile}>4 1 2</h6>
      </div>
      <div className={styles.desktopContainer}>
        <h1 className={styles.operationDesktop}>
          OPERATION <span className={styles.fourTwelveDesktop}>412</span>
        </h1>
      </div>
    </>
  );
}
