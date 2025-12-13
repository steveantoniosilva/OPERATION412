import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import styles from '../styles/bookCover.module.css';

interface TiltHTMLElement extends HTMLDivElement {
  vanillaTilt?: {
    destroy: () => void;
  };
}

interface BookCoverProps {
  bookImageUrl: string;
  alt: string;
  bookMoreInfoUrl?: string;
  clickable?: boolean;
  tilt?: boolean;
}

export default function BookCover({
  bookImageUrl,
  alt,
  bookMoreInfoUrl,
  clickable = true,
  tilt = true,
}: BookCoverProps) {
  const tiltRef = useRef<TiltHTMLElement | null>(null);

useEffect(() => {
  const el = tiltRef.current;
  if (!tilt || !el) return;

  if (!el.vanillaTilt) {
    VanillaTilt.init(el, {
      max: 6,
      speed: 600,
      scale: 1.02,
      perspective: 1000,
      glare: true,
      'max-glare': 0.5,
    });
  }

  return () => {
    el.vanillaTilt?.destroy();
  };
}, [tilt]);


  const book = (
    <div
      ref={tiltRef}
      className={styles.book}
      data-clickable={clickable}>
      <Image
        src={bookImageUrl}
        alt={alt}
        fill
        className={styles.image}
        priority
      />
    </div>
  );

  if (clickable && bookMoreInfoUrl) {
    return (
      <div className={styles.bookWrapper}>
        <Link href={bookMoreInfoUrl}>{book}</Link>
      </div>
    );
  }

  return <div className={styles.bookWrapper}>{book}</div>;
}
