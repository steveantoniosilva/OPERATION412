import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';

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
        <Heading style={{ opacity: '.5' }}>Hammer & Chisel Books</Heading>
        <Paragraph textAlign='center'>
          When Michelangelo was asked how he created the statue of David from a chunk of marble, he said: “I didn't, he
          was already in there. I just chipped away everything that wasn't David.”
        </Paragraph>
      </div>
    </>
  );
};

export default Home;
