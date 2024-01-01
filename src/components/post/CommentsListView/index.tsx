import React from 'react';

import styles from './CommentsListView.module.scss';
import CommentItem from './components/CommentItem';

const commentsList = [
  {
    author: '개똥이',
    comment:
      '가나다라마바사 가나다라마바사가나다라마바사가나다라마바사가나다라마바사 가나다라마바사 가나다라마바사가나다라마바사 가나다라마바사',
    createdAt: '2024-01-01',
  },
  {
    author: '개똥이',
    comment: 'TEST1',
    createdAt: '2024-01-02',
  },
  {
    author: '개똥이',
    comment: 'TEST2',
    createdAt: '2024-01-03',
  },
];

const CommentsListView = () => {
  return (
    <div className={styles['comments-list-view']}>
      <>
        {commentsList.map((item, index) => {
          return <CommentItem key={index} data={item} />;
        })}
      </>
    </div>
  );
};

export default CommentsListView;
