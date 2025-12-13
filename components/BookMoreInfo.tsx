import Image from 'next/image';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import bookCoverStyles from '../styles/book.module.css';
import Button from './Button';
import Paragraph from './Paragraph';
import TitleForPages from './TitleForPages';

interface TiltHTMLElement extends HTMLDivElement {
  vanillaTilt?: {
    destroy: () => void;
  };
}

interface BookProps {
  bookTitle: string;
  bookTitleSpan: string;
  bookIntro: string;
  bookDescription: string[];
  bookAmazonUrl: string;
  alt: string;
  bookImageUrl: string;
}

const BookMoreInfo: React.FC<BookProps> = ({
  bookTitle,
  bookTitleSpan,
  bookDescription,
  bookIntro,
  bookAmazonUrl,
  alt,
  bookImageUrl,
}) => {
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
    <div className='main'>
      <div className='containerBookMoreInfo'>
        <TitleForPages>
          {bookTitle} <span>{bookTitleSpan}</span>
        </TitleForPages>

        <br />
        <hr className='hrBookMoreInfo' />
        <br />
        <br />

        <Paragraph>{bookIntro}</Paragraph>

        <Button href={bookAmazonUrl}>FIND ON AMAZON</Button>

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
      {bookDescription.map((text, i) => (
        <Paragraph key={i}>{text}</Paragraph>
      ))}
      <Button href={bookAmazonUrl}>FIND ON AMAZON</Button>
    </div>
  );
};

export default BookMoreInfo;
