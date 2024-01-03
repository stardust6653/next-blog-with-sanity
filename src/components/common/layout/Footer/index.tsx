import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      Copyright&copy; {new Date().getFullYear()}.soyepark.All rights reserved.
    </footer>
  );
};

export default Footer;
