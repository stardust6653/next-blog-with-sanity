'use client';

import React, { useState } from 'react';

import styles from './CommentsInput.module.scss';
import { useMe } from '../../../hooks/bookmarks';
import { patchComment } from '../../../util/patchComment';
import UnregisterInputField from './components/UnregisterInputField';
import TextArea from './components/TextArea';
import RegisterField from './components/RegisterField';

import { Comment, SaveComment } from '../../../../types/types';
import usePosts from '../../../hooks/posts';

interface Props {
  id: string;
  commentsCount: number | null;
  handleComments: (comments: Comment) => void;
}

const CommentsInput = ({ id, commentsCount, handleComments }: Props) => {
  const { user } = useMe();

  const [author, setAuthor] = useState('');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState('');

  const date = new Date();

  const commentData: Comment = {
    register: user ? true : false,
    name: user ? user.username : author,
    password: user ? null : password,
    userId: user ? user.id : null,
    profileImage: user ? user.image : null,
    comment: content,
    createdAt: date,
    id: id,
  };

  return (
    <div className={styles['comments']}>
      <label className={styles['comments__comment-label']} htmlFor="comment__input">
        {commentsCount === 0 ? 'Comment' : 'Comments'} ({commentsCount})
      </label>
      <div className={styles['comments__field']}>
        <div className={styles['comments__input-field']}>
          {user ? (
            <RegisterField user={user} />
          ) : (
            <UnregisterInputField author={author} password={password} setAuthor={setAuthor} setPassword={setPassword} />
          )}
          <TextArea setContent={setContent} content={content} />
        </div>
        <div className={styles['comments__button-area']}>
          <button
            className={styles['comments__button']}
            onClick={() => {
              handleComments(commentData);
              setContent('');
              setAuthor('');
              setPassword('');
            }}
          >
            작성하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentsInput;
