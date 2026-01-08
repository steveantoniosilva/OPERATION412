import Link from 'next/link';
import { useState, useRef } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import styles from '../styles/navbar.module.css';
import { useRouter } from 'next/router';
import Paragraph from '../components/Paragraph';
import Heading from '../components/Heading'

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const navRef = useRef(null);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/books', label: 'BOOKS' },
    { href: '/ahead', label: 'AHEAD' },
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
          color='whitesmoke'
          distance='sm'
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
                <Heading>{label}</Heading>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* DESKTOP NAV */}
      {/* <nav className={styles.desktopNav}>
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${styles.desktopLink} ${router.pathname === href ? styles.active : ''}`}>
            <div>
              <h3>{label}</h3>
            </div>
          </Link>
        ))}
      </nav> */}
    </div>
  );
}
