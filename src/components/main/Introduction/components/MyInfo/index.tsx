import React from 'react';

import styles from './MyInfo.module.scss';
import Career from './components/Career';
import Contact from './components/Contact';

const MyInfo = () => {
  return (
    <article className={styles['my-info']}>
      <Career />
      <Contact />
    </article>
  );
};

export default MyInfo;
