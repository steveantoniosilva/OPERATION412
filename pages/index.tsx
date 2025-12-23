import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Heading from '@/components/Heading';

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
          A Lamb's Pen
        </Heading>
      </div>
    </>
  );
};

export default Home;
