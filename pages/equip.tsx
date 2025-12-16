import ThreeSections from '@/components/ThreeSections';

const Equip = () => {
  return (
    <ThreeSections
      pageTitle='The Equipping of His Saints'
      metaDescription='for the equipping of the saints… — Ephesians 4:12 (a).'
      heading='The Equipping of His Saints'
      verse='— Ephesians 4:12 (a)'
      introParagraphs={[
        <>
          Like a child, I began with a simple question—what does it mean to be{' '}
          <span style={{ fontStyle: 'italic' }}>equipped?</span> What does{' '}
          <span style={{ fontStyle: 'italic' }}>equipping</span> look like? What I discovered didn't change how I
          thought about Ephesians 4:12, it transformed it.
        </>,
        <>
          The following are historical and biblical expressions of either the words translated as{' '}
          <span style={{ fontStyle: 'italic' }}>equipping (katartismos)</span> or{' '}
          <span style={{ fontStyle: 'italic' }}>to equip (katartizō)</span>.
        </>,
        <>
          This is what being <span style={{ fontStyle: 'italic' }}>equipped</span> looks like.
        </>,
      ]}
      wordPairs={[
        { text: 'When Fishing Nets are Mending', italicWord: 'Mending' },
        {
          text: 'If a bone is dislocated, or out of place, a physician will Set it back into proper position and alignment.',
          italicWord: 'Set',
        },
        { text: 'The Reconciling of Relationships', italicWord: 'Reconciling' },
        { text: 'To Form by Exercise', italicWord: 'Form' },
        { text: 'The Readying of Household Courtyards', italicWord: 'Readying' },
        { text: 'The Outfitting Naval Warships', italicWord: 'Outfitting' },
        { text: 'The Preparing of Slings', italicWord: 'Preparing' },
        { text: 'The Restoring Fallen Sinners', italicWord: 'Restoring' },
        { text: 'The Framing of the Universe', italicWord: 'Framing' },
        { text: 'The Bringing of Order to Cities', italicWord: 'Bringing' },
        { text: 'The Equipping Ships With Rowers', italicWord: 'Equipping' },
        { text: 'The Positioning Armies For Battle', italicWord: 'Positioning' },
      ]}
    />
  );
};

export default Equip;
