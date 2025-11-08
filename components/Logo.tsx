import React from 'react';
import Link from 'next/link';
import styles from '../styles/logo.module.css';
import { Playfair_Display_SC } from 'next/font/google';

const logoText = Playfair_Display_SC({
  subsets: ['latin'],
  weight: ['400'],
});

const Logo = () => {
  return (
    <Link
      href='/'
      passHref>
      <div className={styles.logoContainer}>
        <h1
          style={{ color: 'silver' }}
          className={`${logoText.className}`}>
          Y
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
