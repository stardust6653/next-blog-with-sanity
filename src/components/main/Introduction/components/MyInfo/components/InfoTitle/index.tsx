import React from 'react';

import styles from './InfoTitle.module.scss';

interface Props {
  title: string;
}

const InfoTitle = ({ title }: Props) => {
  return <div className={styles['info-title']}>{title}</div>;
};

export default InfoTitle;
