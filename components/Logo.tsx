import Link from 'next/link';
import styles from '../styles/logo.module.css';
import { AiOutlineFire } from 'react-icons/ai';

const Logo = () => {
  return (
    <Link
      href='/'
      passHref>
      <div className={styles.logoContainer}>
        <AiOutlineFire
          size={44}
          fill='rgba(255, 111, 0, 1)'
        />
      </div>
    </Link>
  );
};

export default Logo;
