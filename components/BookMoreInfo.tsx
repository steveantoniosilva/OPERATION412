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
  subtitle: string;
  description: string;
  amazonUrl: string; 
}

const BookMoreInfo: React.FC<BookProps> = ({ title, subtitle, description, amazonUrl }) => {
  return (
    <div className='main'>
      <div className='container'>
        <h4 className={`${styles.title} ${font.className}`}>{title}</h4>
        <h4 className={`${styles.subtitle} ${font.className}`}>{subtitle}</h4>
        <h5 className={`${styles.text} ${font.className}`}>{description}</h5>

        {/* BUTTON AT THE BOTTOM */}
        <Link
          href={amazonUrl}
          className={styles.button}>
          BUY ON AMAZON
        </Link>
      </div>
    </div>
  );
};

export default BookMoreInfo;
