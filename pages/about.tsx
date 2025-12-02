import styles from '../styles/about.module.css';
import { Cormorant_Garamond } from 'next/font/google';
import { Poppins } from 'next/font/google';

const titleFont = Poppins({
  subsets: ['latin'],
  weight: ['700'],
  style: ['normal', 'italic'],
});

const textFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300'],
  style: ['normal', 'italic'],
});

const About = () => {
  return (
    <div className='main'>
      <div className='container'>
        <h2 className={`${styles.title} ${textFont.className}`}>
          Mission <span className={`${styles.title} ${titleFont.className}`}> 4 1 2 </span>
        </h2>
        <h5 className={`${styles.subtitle} ${textFont.className}`}>
          In Ephesians 4:12, the Holy Spirit articulates through Paul the concept of the “katartismos” of the saints.
          Katartismos describes the saints being adjusted, aligned, completed, equipped, formed by exercise, framed,
          furnished, ordered in battle array, instructed, made complete, joined, properly fitted, made good, mended,
          prepared, put in order, qualified, reconciled, repaired, restored, set in place, set right, and trained—all
          according to God’s original blueprint for His Church. This is the unseen hand behind my writing—the
          katartismos of the saints.
        </h5>
      </div>
    </div>
  );
};

export default About;
