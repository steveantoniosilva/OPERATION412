import Link from 'next/link';
import { useState, useRef } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import styles from '../styles/navbar.module.css';
import { useRouter } from 'next/router';
import Heading from '../components/Heading'

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const navRef = useRef(null);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/books', label: 'BOOKS' },
    { href: '/comingSoon', label: 'SOON' },
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
          rounded
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
                className={`${styles.navLink} ${router.pathname === href ? styles.active : ''}`}
                onClick={() => setOpen(false)}>
                <Heading level='subtitle' fontFamily='cormorant'> {label}</Heading>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
