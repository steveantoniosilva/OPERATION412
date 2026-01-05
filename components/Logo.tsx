// import Link from 'next/link';
// import styles from '../styles/logo.module.css';

// const Logo = () => {
//   return (
//     <Link
//       href='/'
//       passHref>
//       <div className={styles.logoContainer}>
//         <h1 className={styles.logo}>4 1 2</h1>
//       </div>
//     </Link>
//   );
// };

// export default Logo;


import Link from 'next/link';
import { GiTrumpet } from 'react-icons/gi';
import styles from '../styles/logo.module.css';

const Logo = () => {
  return (
    <Link
      href='/'
      passHref>
      <div className={styles.logoContainer}>
        <GiTrumpet
          size={48}
          color='tan'
          aria-label='Home'
        />
      </div>
    </Link>
  );
};

export default Logo;

