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

  useClickAway(navRef, () => {
    if (isOpen) setOpen(false);
  });

  const navLinks = [
    { href: '/forged', label: 'FORGED', className: styles.forged },
    { href: '/in-the-fire', label: 'IN THE FIRE', className: styles.inTheFire },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <div className={styles.hamburger}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={30}
          duration={0.75}
          color='silver'
          rounded
          distance='sm'
          direction='right'
        />
      </div>

      {/* Slide-out Nav */}
      <nav
        ref={navRef}
        className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.ul}>
          {navLinks.map(({ href, label, className }) => (
            <li
              key={href}
              className={styles.li}>
              <Link
                href={href}
                className={`${styles.navLink} ${className} ${router.pathname === href ? styles.active : ''}`}
                onClick={() => setOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
