import React from 'react';

import styles from './MyInfo.module.scss';

import Contact from './components/Contact';
import dynamic from 'next/dynamic';

const MyInfo = () => {
  const Career = dynamic(() => import('./components/Career'), { ssr: false });

  return (
    <article className={styles['my-info']}>
      <Career />
      <Contact />
    </article>
  );
};

export default MyInfo;
