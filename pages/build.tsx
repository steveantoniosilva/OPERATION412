import Head from 'next/head';
import styles from '../styles/build.module.css';
import Paragraph from '@/components/Paragraph';

const Build = () => {
  return (
    <>
      <Head>
        <title>Build His Body</title>
        <meta
          name='description'
          content='Ephesians 4:12 called. Operation 412 answered: equip believers for the work of ministry; build up the Body of Christ.'
        />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.title}>BUILD HIS BODY</h1>
        <Paragraph>EPHESIANS 4:12 = OPERATION 412</Paragraph>
        <Paragraph>Ephesians 4:12 called. Operation 412 answered:</Paragraph>
        <Paragraph>Build up the Body of Christ.</Paragraph>
        <Paragraph>Left</Paragraph>
        <Paragraph>&larr; Go Back</Paragraph>
      </main>
    </>
  );
};

export default Build;
