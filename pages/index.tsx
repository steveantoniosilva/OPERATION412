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
        <Spacer size={8} />
        <Heading>
          <span style={{ fontWeight: '700' }}>BATTLE CRY</span> BOOKS
        </Heading>
      </div>
    </>
  );
};

export default Home;
