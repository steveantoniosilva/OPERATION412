import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SiteTitle from '@/components/SiteTitle';
import ParagraphSpecialFont from '@/components/ParagraphSpecialFont';

const Home = () => {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Home'
        />
      </Head>
      <div className={styles.container}>
              <SiteTitle />
              <ParagraphSpecialFont paragraph='…equipping the saints…' />
      </div>
    </>
  );
};

export default Home;
