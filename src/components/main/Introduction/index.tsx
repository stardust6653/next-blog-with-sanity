import React from 'react';

import styles from './Introduction.module.scss';
import Title from './components/Title';
import IntroImage from './components/IntroImage';
import MyInfo from './components/MyInfo';
import SubTitle from './components/SubTitle';
import Description from './components/Description';
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
