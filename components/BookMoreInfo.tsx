import Link from 'next/link';
import styles from '../styles/bookMoreInfo.module.css';
import BookTitle from '@/components/BookTitle';
import Paragraph from './Paragraph';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import bookCoverStyles from '../styles/book.module.css';
import Button from './Button';

interface TiltHTMLElement extends HTMLDivElement {
  vanillaTilt?: {
    destroy: () => void;
  };
}

interface BookProps {
  bookTitle: string;
  bookTitleSpan: string;
  paragraph: string;
  amazonUrl: string;
  alt: string;
  bookImageUrl: string;
}

const BookMoreInfo: React.FC<BookProps> = ({ bookTitle, bookTitleSpan, paragraph, amazonUrl, alt, bookImageUrl }) => {
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
    <div className='main'>
      <div className='containerBookMoreInfo'>
        <BookTitle
          bookTitle={bookTitle}
          bookTitleSpan={bookTitleSpan}
        />

        <br />
        <hr className='hrBookMoreInfo' />
        <br />

        <Paragraph paragraph={paragraph} />

        <Button href={amazonUrl}>FIND ON AMAZON</Button>

        <div className={bookCoverStyles.bookWrapper}>
          <div
            ref={tiltRef}
            className={bookCoverStyles.book}>
            <div className={bookCoverStyles.cover}>
              <Image
                alt={alt}
                src={bookImageUrl}
                fill
                className={bookCoverStyles.image}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMoreInfo;
