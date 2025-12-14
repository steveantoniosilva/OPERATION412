type SpacerSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;

interface SpacerProps {
  size?: SpacerSize;
}

export default function Spacer({ size = 2 }: SpacerProps) {
  return (
    <div
      style={{
        height: `${size}em`,
      }}
    />
  );
}
