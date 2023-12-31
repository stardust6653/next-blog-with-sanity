import React, { ReactNode } from 'react';

import styles from './CenterAlignment.module.scss';

interface Props {
  children: ReactNode;
  direction?: 'ROW' | 'COLUMN';
}

const CenterAlignment = ({ children, direction = 'ROW' }: Props) => {
  return (
    <div className={`${direction !== 'COLUMN' ? styles['center-alignment'] : styles['center-alignment__column']}`}>
      {children}
    </div>
  );
};

export default CenterAlignment;
