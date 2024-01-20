import React, { useState } from 'react';

import styles from './CommentItem.module.scss';
import { SaveComment } from '../../../../../../types/types';
import { useMe } from '@/hooks/bookmarks';
import usePosts from '../../../../../hooks/posts';

interface Props {
  post: any;
  data: SaveComment;
  postId: string;
}

const CommentItem = ({ post, data, postId }: Props) => {
  const { user } = useMe();
  const { deleteComments } = usePosts();
  const [checkPassword, setCheckPassword] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const createdDate = new Date(data.createdAt);
  const year = String(createdDate.getFullYear());
  const month = String(createdDate.getMonth() + 1);
  const day = String(createdDate.getDate());

  const parsedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  const profileImage = data.register && data.profileImage;

  const handleDelete = () => {
    deleteComments(post, data, postId);
  };

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
          <button className={styles['comment-item__delete-button']} onClick={() => handleDelete()}>
            삭제하기
          </button>
        )}
        {!data.register && (
          <>
            <input
              className={`${styles['comment-item__password-input-for-delete']} ${
                checkPassword && styles['comment-item__check-password']
              }`}
              type="password"
              placeholder="비밀번호 입력"
              onChange={(e) => {
                data.password === e.currentTarget.value ? setCheckPassword(true) : setCheckPassword(false);
              }}
            />
            <button
              className={styles['comment-item__delete-button']}
              onClick={() => {
                !checkPassword && setWrongPassword(true);
                checkPassword && setWrongPassword(false);
                checkPassword && handleDelete();
              }}
            >
              {wrongPassword ? '다시하기' : '삭제하기'}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
