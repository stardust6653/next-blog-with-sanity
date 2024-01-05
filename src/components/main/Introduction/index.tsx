import React from 'react';

import styles from './Introduction.module.scss';
import IntroImage from './components/IntroImage';
import MyInfo from './components/MyInfo';
import TitleBox from './components/TitleBox';

const Introduction = () => {
  return (
    <div className={styles['introduction']}>
      <IntroImage />
      <div className={styles['introduction__main-info']}>
        <TitleBox />
        <MyInfo />
      </div>
    </div>
  );
};

export default Introduction;
