// components/Navbar.jsx
import Link from 'next/link';
import { useState, useRef } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import { useClickAway } from 'react-use';
import styles from '../styles/navbar.module.css';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const navRef = useRef(null);

  // 👇 Now navRef wraps BOTH hamburger + nav
  useClickAway(navRef, () => {
    setOpen(false);
  });

  const navLinks = [
    { href: '/about', label: 'THE MISSION' },
    { href: '/books', label: 'PUBLISHED BOOKS', className: 'books' },
    { href: '/comingSoon', label: 'COMING SOON' },
  ];

  return (
    <div ref={navRef}>
      <div className={styles.topNavBanner}></div>
      {/* Hamburger Button */}
      <div className={styles.hamburger}>
        <Hamburger
          toggled={isOpen}
          toggle={() => setOpen(prev => !prev)} // 👈 explicit toggle
          size={30}
          duration={0.75}
          color='white'
          rounded
          distance='sm'
          direction='right'
        />
      </div>

      {/* Slide-out Nav */}
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.ul}>
          {navLinks.map(({ href, label, className }) => (
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
