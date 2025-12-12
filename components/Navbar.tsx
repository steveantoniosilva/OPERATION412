import Link from 'next/link';
import { useState, useRef } from 'react';
import { FaLock, FaUnlock } from 'react-icons/fa';
import { Spin as Hamburger } from 'hamburger-react';
import styles from '../styles/navbar.module.css';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const navRef = useRef(null);

  const navLinks = [
    { href: '/', label: 'BACK TO HOME' },
    { href: '/about', label: 'EPHESIANS 4:12' },
    { href: '/books', label: '412 BOOKSHELF' },
    { href: '/comingSoon', label: 'COMING SOON' },
  ];

  return (
    <div ref={navRef}>
      {/* Hamburger Button */}
      <div
        className={styles.hamburger}
        onClick={() => setOpen(prev => !prev)}
        aria-label='Toggle navigation'>
        {!isOpen ? <FaLock size={33} /> : <FaUnlock size={33} />}
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
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
