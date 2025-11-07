import React from 'react';
import Link from 'next/link';
import styles from '../styles/logo.module.css';
import { Grey_Qo } from 'next/font/google';

const logoText = Grey_Qo({
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
          style={{ color: 'red' }}
          className={`${logoText.className}`}>
          b
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
