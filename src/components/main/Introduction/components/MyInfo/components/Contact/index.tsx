import React from 'react';

import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';

import styles from './Contact.module.scss';
import InfoTitle from '../InfoTitle';

const Contact = () => {
  return (
    <div className={styles['contact']}>
      <InfoTitle title="Contact Me" />

      <div className={styles['contact__icon-group']}>
        <a href="https://www.linkedin.com/in/soye-park-30a3ab229/" target="blank">
          <AiOutlineLinkedin />
          {/* <p>LinkedIn</p> */}
        </a>
        <a href="https://github.com/stardust6653" target="blank">
          <FiGithub />
          {/* <p>github</p> */}
        </a>
        <a href="mailto:stardust6653@gmail.com">
          <FiMail />
          {/* <p>email</p> */}
        </a>
      </div>
    </div>
  );
};

export default Contact;
