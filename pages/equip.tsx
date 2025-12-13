import Head from 'next/head';
import styles from '../styles/equip.module.css';
import ParagraphCentered from '@/components/ParagraphCentered';
import ParagraphLeft from '@/components/ParagraphLeft';

const Equip = () => {
  return (
    <>
      <Head>
        <title>Equip His Army</title>
        <meta
          name='description'
          content='Ephesians 4:12 called. Operation 412 answered: equip believers for the work of ministry; build up the Body of Christ.'
        />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.title}>EQUIP HIS ARMY</h1>
        <ParagraphCentered>EPHESIANS 4:12 = OPERATION 412</ParagraphCentered>
        <ParagraphCentered>Ephesians 4:12 called. Operation 412 answered:</ParagraphCentered>
        <ParagraphCentered>Equip believers for the work of ministry.</ParagraphCentered>
        <ParagraphLeft>Left</ParagraphLeft>
        <ParagraphLeft>&larr; Go Back</ParagraphLeft>
      </main>
    </>
  );
};

export default Equip;
