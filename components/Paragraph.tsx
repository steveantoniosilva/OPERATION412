import clsx from 'clsx';
import styles from '../styles/paragraph.module.css';
import { cursive } from '../library/fonts';
import { ReactNode } from 'react';

/* ---------- Types & constants ---------- */

type ParagraphVariant = 'left' | 'center' | 'cursiveLeft' | 'cursiveCentered';

const cursiveVariants: ParagraphVariant[] = ['cursiveLeft', 'cursiveCentered'];

/* ---------- Component ---------- */

interface ParagraphProps {
  children: ReactNode;
  variant?: ParagraphVariant;
}

export default function Paragraph({ children, variant = 'left' }: ParagraphProps) {
  const variantClass = styles[variant as keyof typeof styles];

  return (
    <p className={clsx(styles.base, variantClass, cursiveVariants.includes(variant) && cursive.className)}>
      {children}
    </p>
  );
}
