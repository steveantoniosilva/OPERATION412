import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import Spacer from '@/components/Spacer';
import { Crimson_Text } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const numbers = Crimson_Text({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
});

const Home = () => {
  return (
    <>
      <Head>
        <title>412 Books</title>
        <meta
          name='description'
          content='412 Books.'
        />
      </Head>

      <div className={styles.container}>
        <Heading>
          <span className='huge'>412</span> Books
        </Heading>
      </div>
    </>
  );
};

export default Home;
