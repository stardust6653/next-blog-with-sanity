import React, { Dispatch, SetStateAction, useState } from 'react';

import styles from './PaginationButton.module.scss';

interface Props {
  contentLength: number;
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
}

const PaginationButton = ({ contentLength, setPage, page }: Props) => {
  const contentLengthArr = (): number[] => {
    const arr = [];
    for (let i = 1; i <= Math.ceil(contentLength / 12); i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <div className={styles['pagination-button']}>
      {contentLengthArr().map((item) => {
        return (
          <div
            key={item}
            className={`${styles['pagination-button__page-number']}  ${
              item === page && styles['pagination-button__active-button']
            }`}
            onClick={() => {
              setPage(item - 1);
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default PaginationButton;
