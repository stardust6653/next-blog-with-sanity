import React from 'react';

import styles from './Description.module.scss';

const Description = () => {
  return (
    <div className={styles['description']}>
      경험했던 것을 기록하는 것은 미래를 위한 자산을 만들어내는 것이라고 생각합니다. 기술에 대한 해결책과 고민 뿐만이
      아닌 경험한 다양한 것들에 대해서 많은 사람들과 공유하고 싶습니다. 이 곳이 저를 위한 도서관을 넘어 많은 분들이
      지식을 채워갈 수 있는, 인사이트를 얻어갈 수 있는 공간이 되길 희망합니다.
    </div>
  );
};

export default Description;
