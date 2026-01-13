import Link from 'next/link';
import styles from '../styles/button.module.css';
import { Poppins } from 'next/font/google';

const siteFont = Poppins({
  subsets: ['latin'],
  weight: ['400'],
});

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, children }) => {
  return (
    <div className={siteFont.className}>
      <Link
        href={href}
        className={styles.button}>
        {children}
      </Link>
    </div>
  );
};

export default Button;
