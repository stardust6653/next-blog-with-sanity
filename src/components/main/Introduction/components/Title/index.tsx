import React from 'react';

import styles from './Title.module.scss';

const Title = () => {
  return (
    <h1 className={styles['title']}>
      <span className={styles['title__sub']}>Welcome,</span>
      <br />
      <span className={styles['title__main']}>Soyeah Blog</span>
    </h1>
  );
};

export default Title;
