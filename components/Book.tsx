import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import styles from '../styles/book.module.css';

interface BookProps {
  bookImageUrl: string;
  bookMoreInfoUrl: string;
  alt: string;
}

interface TiltHTMLElement extends HTMLDivElement {
  vanillaTilt?: {
    destroy: () => void;
  };
}

const Book: React.FC<BookProps> = ({ bookImageUrl, bookMoreInfoUrl, alt }) => {
  const tiltRef = useRef<TiltHTMLElement | null>(null);

  useEffect(() => {
    if (!tiltRef.current) return;

VanillaTilt.init(tiltRef.current, {
  max: 6, // subtle, premium tilt
  speed: 600, // smooth return
  scale: 1.02, // just enough lift
  perspective: 1000, // natural depth (key)
  glare: true,
  'max-glare': 0.5, // realistic laminate shine
});


    return () => {
      tiltRef.current?.vanillaTilt?.destroy();
    };
  }, []);

  return (
    <div className={styles.bookWrapper}>
      <Link href={bookMoreInfoUrl}>
        <div
          ref={tiltRef}
          className={styles.book}>
          <Image
            src={bookImageUrl}
            alt={alt}
            fill
            className={styles.image}
            priority
          />
        </div>
      </Link>
    </div>
  );
};

export default Book;
