import React from 'react';

import styles from './PageTitle.module.scss';

const PageTitle = ({ text }: { text: string }) => {
  return <h2 className={styles['page-title']}>{text}</h2>;
};

export default PageTitle;
