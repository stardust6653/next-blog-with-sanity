import React from 'react';

import styles from './Introduction.module.scss';
import Title from './components/Title';
import IntroImage from './components/IntroImage';
import MyInfo from './components/MyInfo';

const Introduction = () => {
  return (
    <div className={styles['introduction']}>
      <Title />
      <IntroImage />
      <MyInfo />
    </div>
  );
};

export default Introduction;
