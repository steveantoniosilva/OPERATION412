import Head from 'next/head';
import styles from '../styles/equip.module.css';
import ParagraphCentered from '@/components/ParagraphCentered';
import ParagraphLeft from '@/components/ParagraphLeft';

const Equip = () => {
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
        <ParagraphCentered>OPERATION 412 = EPHESIANS 4:12</ParagraphCentered>
        <ParagraphCentered>Ephesians 4:12 called. Operation 412 answered:</ParagraphCentered>
        <ParagraphCentered>Build up the Body of Christ.</ParagraphCentered>
        <ParagraphLeft>Left</ParagraphLeft>
      </main>
    </>
  );
};

export default Equip;
