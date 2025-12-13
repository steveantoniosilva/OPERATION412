import { ReactNode } from 'react';
import clsx from 'clsx';
import styles from '../styles/titleForPages.module.css';
import { cursive } from '@/library/fonts';

type TitleVariant = 'default' | 'cursive';

interface TitleForPagesProps {
  children: ReactNode;
  variant?: TitleVariant;
}

export default function TitleForPages({ children, variant = 'default' }: TitleForPagesProps) {
  return <h5 className={clsx(styles.base, styles[variant], variant === 'cursive' && cursive.className)}>{children}</h5>;
}
