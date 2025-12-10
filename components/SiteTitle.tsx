import styles from '../styles/siteTitle.module.css';

export default function SiteTitle() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.operation}>OPERATION</h1>
        <h6 className={styles.fourTwelve}>4</h6>
        <h6 className={styles.fourTwelve}>1</h6>
        <h6 className={styles.fourTwelve}>2</h6>
      </div>
      {/* <div className={styles.desktopContainer}>
        <h1 className={styles.operationDesktop}>
          OPERATION <span className={styles.fourTwelveDesktop}>412</span>
        </h1>
      </div> */}
    </>
  );
}
