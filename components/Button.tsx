import Link from 'next/link';
import styles from '../styles/button.module.css';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className={styles.button}>
      {children}
    </Link>
  );
};

export default Button;
