import Image from 'next/image';
import Link from 'next/link';
import bookCoverStyles from '../styles/book.module.css';

interface BookProps {
  bookImageUrl: string;
  moreInfoUrl: string;
  alt: string;
}

const Book: React.FC<BookProps> = ({ bookImageUrl, moreInfoUrl, alt }) => {
  return (
    <div className={bookCoverStyles.bookWrapper}>
      <div className={bookCoverStyles.book}>
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
