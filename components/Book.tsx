import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import bookCoverStyles from '../styles/book.module.css';

interface BookProps {
  bookImageUrl: string;
  moreInfoUrl: string;
  alt: string;
}

const Book: React.FC<BookProps> = ({ bookImageUrl, moreInfoUrl, alt }) => {
interface TiltHTMLElement extends HTMLDivElement {
  vanillaTilt?: {
    destroy: () => void;
  };
}

const tiltRef = useRef<TiltHTMLElement | null>(null);

useEffect(() => {
  if (!tiltRef.current) return;

  VanillaTilt.init(tiltRef.current, {
    max: 12,
    speed: 500,
    glare: true,
    'max-glare': 0.25,
  });

  return () => {
    tiltRef.current?.vanillaTilt?.destroy();
  };
}, []);


  return (
    <div className={bookCoverStyles.bookWrapper}>
      <div
        ref={tiltRef}
        className={bookCoverStyles.book}>
        <Link href={moreInfoUrl}>
          <div className={bookCoverStyles.cover}>
            <Image
              alt={alt}
              src={bookImageUrl}
              fill
              className={bookCoverStyles.image}
              priority
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Book;
