import ThreeSections from '@/components/ThreeSections';

const TheWork = () => {
  return (
    <ThreeSections
      pageTitle='The Work of His Ministry'
      metaDescription='…for the work of the ministry… — Ephesians 4:12 (b).'
      heading='The Work of the Ministry'
      verse='— Ephesians 4:12 (b)'
      introParagraphs={[
        <>
          The Greek words behind this mandate to carry out <span style={{ fontStyle: 'italic' }}>the work</span> and{' '}
          <span style={{ fontStyle: 'italic', color: 'tan' }}>the ministry</span> is rich with historical meaning and
          application — explore its usage below.
        </>,
      ]}
      wordPairs={[{ text: 'Repairing Temple Stones', italicWord: 'Repairing' }]}
    />
  );
};

export default TheWork;
