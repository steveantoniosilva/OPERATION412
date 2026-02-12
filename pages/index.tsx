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
          content='BATTLE CRY BOOKS.'
        />
      </Head>

      <div className={styles.container}>
        <div className={styles.headingDiv}>
          <h1 className={styles.title}>
            <span style={{ fontWeight: '100' }}>4 1 2</span> Books
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
