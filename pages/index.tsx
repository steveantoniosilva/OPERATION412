import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SiteTitle from '@/components/SiteTitle';

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
      </div>
    </>
  );
};

export default Home;
