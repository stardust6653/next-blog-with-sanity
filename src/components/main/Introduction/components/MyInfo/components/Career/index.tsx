import React from 'react';

import styles from './Career.module.scss';
import InfoTitle from '../InfoTitle';

interface CareerType {
  job: string;
  company: string;
  startDate: string;
  endDate: string;
}

const myCareer: CareerType[] = [
  {
    job: 'Frontend Engineer',
    company: '소프트스펠',
    startDate: '2023-11-01',
    endDate: '',
  },
];

const companyName = (item: CareerType) => {
  if (item.endDate !== '') {
    return <div>(전) {item.company}</div>;
  } else if (item.endDate === '') {
    return <div>(현) {item.company}</div>;
  }
};

const periodOfEmployment = (item: CareerType) => {
  const startDate = new Date(item.startDate);
  const endDate = item.endDate !== '' ? new Date(item.endDate) : new Date();

  const period = Math.floor((+endDate - +startDate) / 1000 / 60 / 60 / 24 / 30);

  if (period / 12 > 1) {
    return (
      <div>
        {Math.floor(period / 12)}년 {period % 12}개월
      </div>
    );
  } else if (period / 12 === 1) {
    return <div>{Math.floor(period / 12)}년</div>;
  } else if (period / 12 < 1) {
    return <div>{period % 12}개월</div>;
  }
};

const sortData = myCareer.sort((a, b) => {
  const start = new Date(b.startDate);
  const end = new Date(a.startDate);
  return +start - +end;
});

const endDateFilter = (item: CareerType) => {
  if (item.endDate === '') {
    return '현재';
  }
  return item.endDate;
};

const Career = () => {
  return (
    <div>
      <InfoTitle title="My Career" />
      <div className={styles['career']}>
        <>
          {sortData.map((item: CareerType, index) => {
            return (
              <div className={styles['career__info-group']} key={index}>
                <div className={styles['career__career-data']}>
                  <div className={styles['career__company-name']}>{companyName(item)}</div>
                  <div className={styles['career__job']}>{item.job}</div>
                  <div className={styles['career__period-date']}>{periodOfEmployment(item)}</div>
                </div>
                <div className={styles['career__date-group']}>
                  <div className={styles['carrer__start-date']}>{item.startDate}&nbsp;~</div>
                  <div className={styles['carrer__end-date']}>&nbsp;{endDateFilter(item)}</div>
                </div>
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
};

export default Career;
