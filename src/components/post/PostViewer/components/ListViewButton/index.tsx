import React from 'react';

import styles from './ListViewButton.module.scss';
import Link from 'next/link';

const ListViewButton = () => {
  return (
    <div className={styles['list-view-button']}>
      <Link href={'/posts'}>
        <button className={styles['list-view-button__button']}>목록으로</button>
      </Link>
    </div>
  );
};

export default ListViewButton;
