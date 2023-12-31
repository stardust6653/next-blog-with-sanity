import React from 'react';
import Lottie from 'lottie-react';
import loadingLottie from '../../../../public/assets/lottie/loader.json';

import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles['loader']}>
      <Lottie animationData={loadingLottie} />
    </div>
  );
};

export default Loader;
