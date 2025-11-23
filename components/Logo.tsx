// import Link from 'next/link';
// import styles from '../styles/logo.module.css';

// const Logo = () => {
//   return (
//     <Link
//       href='/'
//       passHref>
//       <div className={styles.logoContainer}>
//         <h1 className={styles.b}>B</h1>
//       </div>
//     </Link>
//   );
// };

// export default Logo;

import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/logo.module.css';

const Logo = () => {
  return (
    <Link
      href='/'
      passHref>
      <div className={styles.logoContainer}>
        <Image
          src='/bb.png'
          alt='Burning B Logo'
          width={111}
          height={111}
          priority
          className={styles.logoImage}
        />
      </div>
    </Link>
  );
};

export default Logo;
