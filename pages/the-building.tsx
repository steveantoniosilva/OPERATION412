import ThreeSections from '@/components/ThreeSections';

const TheBuilding = () => {
  return (
    <ThreeSections
      pageTitle='Build His Body'
      metaDescription='…for the building up of the Body — Ephesians 4:12 (c).'
      heading='The Building of His Body'
      verse='— Ephesians 4:12 (c)'
      introParagraphs={[
        <>
          The Greek behind the mandate to <span style={{ fontStyle: 'italic' }}>build</span> His Body is rich with
          historical meaning and application — explore its usage below.
        </>,
      ]}
      wordPairs={[
        { text: 'Fortifying City Walls', italicWord: 'Fortifying' },
        { text: 'Repairing Temple Stones', italicWord: 'Repairing' },
        { text: 'Expanding A Household', italicWord: 'Expanding' },
        { text: 'Restoring A Collapsed Structure', italicWord: 'Restoring' },
        { text: 'Reinforcing A Foundation', italicWord: 'Reinforcing' },
      ]}
    />
  );
};

export default TheBuilding;
