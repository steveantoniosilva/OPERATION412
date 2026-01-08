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
          <Heading>
            <span className={styles.span}>BATTLE CRY</span> BOOKS
          </Heading>
        </div>
      </div>
    </>
  );
};

export default Home;
