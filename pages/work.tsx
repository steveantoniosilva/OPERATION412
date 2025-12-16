import ThreeSections from '@/components/ThreeSections';

const Work = () => {
  return (
    <ThreeSections
      pageTitle='Work His Works'
      metaDescription='…for the work of the ministry… — Ephesians 4:12 (b).'
      heading='The Work of His Ministry'
      verse='— Ephesians 4:12 (b)'
      introParagraphs={[
        <>
          The Greek words behind this mandate to carry out{' '}
          <span style={{ fontStyle: 'italic' }}>the work of the ministry</span> is rich with historical meaning and
          application — explore its usage below.
        </>,
      ]}
      wordPairs={[{ text: 'Repairing Temple Stones', italicWord: 'Repairing' }]}
    />
  );
};

export default Work;
