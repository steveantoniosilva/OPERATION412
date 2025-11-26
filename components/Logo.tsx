import Link from 'next/link';
import styles from '../styles/logo.module.css';

const Logo = () => {
  return (
    <Link
      href='/'
      passHref>
      <div className={styles.logoContainer}>
        <h1 className={styles.logo}>H & F</h1>
      </div>
    </Link>
  );
};

export default Logo;

// import Link from 'next/link';
// import Image from 'next/image';
// import styles from '../styles/logo.module.css';

// const Logo = () => {
//   return (
//     <Link
//       href='/'
//       passHref>
//       <div className={styles.logoContainer}>
//         <Image
//           src='/t.png'
//           alt='logo'
//           width={160}
//           height={160}
//           className={styles.logoImage}
//         />
//       </div>
//     </Link>
//   );
// };

// export default Logo;
