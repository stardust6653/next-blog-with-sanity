import React from 'react';

import styles from './CommentItem.module.scss';

interface Props {
  data: {
    author: string;
    comment: string;
    createdAt: string;
  };
}

const CommentItem = ({ data }: Props) => {
  return (
    <div className={styles['comment-item']}>
      <div className={styles['comment-item__writing-info']}>
        <div className={styles['comment-item__author']}>{data.author}</div>
        <div className={styles['comment-item__created-at']}>{data.createdAt}</div>
      </div>
      <div className={styles['comment-item__comment']}>{data.comment}</div>
      <div className={styles['comment-item__action-group']}>
        <button>수정하기</button>
        <button className={styles['comment-item__delete-button']}>삭제하기</button>
      </div>
    </div>
  );
};

export default CommentItem;
