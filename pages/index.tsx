import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Heading from '@/components/Heading';
import Spacer from '@/components/Spacer';

const Home = () => {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='412 Books.'
        />
      </Head>

          <div className={styles.container}>
              <Spacer size={8} />
        <Heading>Battle Cry Books</Heading>
      </div>
    </>
  );
};

export default Home;
