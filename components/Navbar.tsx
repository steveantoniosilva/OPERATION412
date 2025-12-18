import Link from 'next/link';
import { useState, useRef } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import styles from '../styles/navbar.module.css';
import { useRouter } from 'next/router';
import Paragraph from '../components/Paragraph'
import { Crimson_Text } from 'next/font/google';

const numbers = Crimson_Text({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
});

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const navRef = useRef(null);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/books', label: 'Books' },
    { href: '/next-book', label: 'Next Book' },
  ];

  return (
    <div ref={navRef}>
      {/* Hamburger Button */}
      <div
        className={styles.hamburger}
        aria-label='Toggle navigation'>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={33}
          duration={0.75}
          color='white'
        />
      </div>

      {/* Slide-out Nav */}
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.ul}>
          {navLinks.map(({ href, label }) => (
            <li
              key={href}
              className={styles.li}>
              <Link
                href={href}
                className={`${styles.navLink} ${numbers.className} ${router.pathname === href ? styles.active : ''}`}
                onClick={() => setOpen(false)}>
                <Paragraph
                  fontStyle='italic'
                  textAlign='center'>
                  {' '}
                  {label}
                </Paragraph>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* DESKTOP NAV */}
      <nav className={styles.desktopNav}>
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${styles.desktopLink} ${numbers.className} ${router.pathname === href ? styles.active : ''}`}>
            <Paragraph fontStyle='italic'>{label}</Paragraph>
          </Link>
        ))}
      </nav>
    </div>
  );
}
