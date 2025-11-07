import { Satisfy } from 'next/font/google';

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: ['400'],
});

interface SectionTitleProps {
  title: string;
}

const HighlightTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div>
      <h1
        className={satisfy.className}
        style={{
          marginBottom: '1em',
          display: 'inline-block',
          borderRadius: '5px',
          color: 'rgb(255,0,0)',
        }}>
        {title}
      </h1>
    </div>
  );
};

export default HighlightTitle;
