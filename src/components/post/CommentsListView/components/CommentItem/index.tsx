import React from 'react';

import styles from './CommentItem.module.scss';
import { Comment, SaveComment } from '../../../../../../types/types';
import { useMe } from '@/hooks/bookmarks';
import { deleteComment } from '@/util/deleteComment';

interface Props {
  data: SaveComment;
  postId: string;
}

const CommentItem = ({ data, postId }: Props) => {
  const { user } = useMe();
  const createdDate = new Date(data.createdAt);
  const year = String(createdDate.getFullYear());
  const month = String(createdDate.getMonth() + 1);
  const day = String(createdDate.getDay());

  const parsedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  const profileImage = data.register && data.profileImage;

  return (
    <div className={styles['comment-item']}>
      <div className={styles['comment-item__writing-info']}>
        <div
          className={styles['comment-item__profile-photo']}
          style={{
            background: `url(${profileImage}) center center`,
            backgroundSize: 'cover',
            backgroundColor: 'beige',
          }}
        />
        <div>
          <div className={styles['comment-item__author']}>{data.name}</div>
          <div className={styles['comment-item__created-at']}>{parsedDate}</div>
        </div>
      </div>
      <div className={styles['comment-item__comment']}>{data.comment}</div>
      <div className={styles['comment-item__action-group']}>
        {data.register && user?.id === data.userId && (
          <button
            className={styles['comment-item__delete-button']}
            onClick={() => {
              deleteComment(data, postId);
            }}
          >
            삭제하기
          </button>
        )}
        {!data.register && (
          <button
            className={styles['comment-item__delete-button']}
            onClick={() => {
              deleteComment(data, postId);
            }}
          >
            삭제하기
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
