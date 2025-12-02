import Link from 'next/link';
import styles from '../styles/bookMoreInfo.module.css';
import { Cormorant_Garamond } from 'next/font/google';

const font = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300'],
  style: ['normal', 'italic'],
});

interface BookProps {
  title: string;
  text: string;
  url: string; // ← NEW
}

const BookMoreInfo: React.FC<BookProps> = ({ text, title, url }) => {
  return (
    <div className='main'>
      <div className='container'>
        <h2 className={`${styles.text} ${font.className}`}>{title}</h2>
        <h5 className={`${styles.text} ${font.className}`}>{text}</h5>

        {/* BUTTON AT THE BOTTOM */}
        <Link
          href={url}
          className={styles.button}>
          BUY ON AMAZON
        </Link>
      </div>
    </div>
  );
};

export default BookMoreInfo;
