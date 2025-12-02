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
}

const BookMoreInfo: React.FC<BookProps> = ({ text, title }) => {
  return (
    <div className='main'>
      <div className='container'>
        <h2 className={`${styles.text} ${font.className}`}>{title}</h2>
        <h5 className={`${styles.text} ${font.className}`}>{text}</h5>
      </div>
    </div>
  );
};

export default BookMoreInfo;
