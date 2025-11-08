import Link from 'next/link';
import { useState, useRef } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import { useClickAway } from 'react-use';
import styles from '../styles/navbar.module.css';
import { useRouter } from 'next/router';
import { Montserrat } from 'next/font/google';

const linkText = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
});

function Navbar() {
  const router = useRouter();

  const [isOpen, setOpen] = useState(false);
  const navbarRef = useRef(null);

  useClickAway(navbarRef, () => {
    if (isOpen) setOpen(false);
  });

  const handleClick = () => {
    setOpen(prevState => !prevState);
  };

  const navLinks = [
    { href: '/books', label: 'books' },
  ];

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <>
        <div ref={navbarRef}>
          <div className={styles.hamburger}>
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={30}
              duration={0.75}
              color='silver'
              rounded={true}
              distance='sm'
              direction='right'
            />
          </div>
          {/* Mobile Nav */}
          <nav className={`${styles.verticalNav} ${!isOpen ? styles.isClosed : ''}`}>
            <ul className={`${styles.ul} ${linkText.className}`}>
              {navLinks.map(({ href, label }) => (
                <li
                  key={href}
                  className={styles.li}>
                  <Link
                    href={href}
                    onClick={() => isOpen && handleClick()}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </>

      {/* Desktop Nav */}
      <nav className={`${styles.desktopNav} ${linkText.className}`}>
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${styles.desktopNavLink} ${router.pathname === href ? styles.active : ''}`}>
            {label}
          </Link>
        ))}
      </nav>
    </>
  );
}

export default Navbar;
