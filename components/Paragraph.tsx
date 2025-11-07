import React from 'react';

interface ParagraphProps {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  return (
    <h5
      style={{
        maxWidth: '777px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '5em',
      }}>
      {text}
    </h5>
  );
};

export default Paragraph;
