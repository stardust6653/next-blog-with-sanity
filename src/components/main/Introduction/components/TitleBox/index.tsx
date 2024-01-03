import React from 'react';
import Title from '../Title';
import SubTitle from '../SubTitle';
import Description from '../Description';

import styles from './TitleBox.module.scss';

const TitleBox = () => {
  return (
    <div className={styles['title-box']}>
      <Title />
      <SubTitle />
      <Description />
    </div>
  );
};

export default TitleBox;
