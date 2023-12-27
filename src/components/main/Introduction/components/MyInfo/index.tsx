import React from 'react';

import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

import styles from './MyInfo.module.scss';

const MyInfo = () => {
  return (
    <article className={styles['my-info']}>
      <div className={styles['my-info__name-box']}>
        <p className={styles['my-info__name']}>Soye Park</p>
        <div className={styles['my-info__icon-group']}>
          <a
            className={styles['my-info__linked-in']}
            href="https://www.linkedin.com/in/soye-park-30a3ab229/"
            target="blank"
          >
            <AiOutlineLinkedin />
          </a>
          <a href="https://github.com/stardust6653" target="blank">
            <FiGithub />
          </a>
        </div>
      </div>
      <a href="mailto:stardust6653@gmail.com">
        <p className={styles['my-info__email']}>stardust6653@gmail.com</p>
      </a>
    </article>
  );
};

export default MyInfo;
