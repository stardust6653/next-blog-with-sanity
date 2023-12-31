import React from 'react';
import HeartIcon from '../../../../ui/icons/HeartIcon';
import ViewIcon from '../../../../ui/icons/ViewIcon';
import { parseDate } from '../../../../../util/date';

import styles from './CardInfo.module.scss';

const CardInfo = ({ data }) => {
  return (
    <div className={styles['card-info']}>
      <p className={styles['card-info__title']}>{data.title}</p>
      <p className={styles['card-info__description']}>{data.description}</p>
      <div className={styles['card-info__sub-info-group']}>
        <div className={styles['card-info__icon-info-group']}>
          <div className={styles['card-info__icon']}>
            <ViewIcon size="text-xl" />
            <p>{data.viewCount}</p>
          </div>
          <div className={styles['card-info__icon']}>
            <HeartIcon size="ml-2 text-base" />
            <p>{data.likes?.length ?? 0}</p>
          </div>
        </div>
        <p className={styles['card-info__created-date']}>{parseDate(data.date)}</p>
      </div>
    </div>
  );
};

export default CardInfo;
