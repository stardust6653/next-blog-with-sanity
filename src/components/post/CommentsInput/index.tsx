import React from 'react';

import styles from './CommentsInput.module.scss';

const CommentsInput = () => {
  return (
    <div className={styles['comments']}>
      <label className={styles['comments__comment-label']} htmlFor="comment__input">
        Comments
      </label>
      <div className={styles['comments__field']}>
        <div className={styles['comments__input-field']}>
          <form className={styles['comments__id-info']}>
            <div className={styles['comments__id-input-group']}>
              <label className={styles['comments__id-input-label']} htmlFor="id-input">
                ID
              </label>
              <input className={styles['comments__password-input-label']} id="id-input" type="text" placeholder="ID" />
            </div>
            <div className={styles['comments__password-input-group']}>
              <label htmlFor="password-input">Password</label>
              <input id="password-input" type="password" placeholder="PASSWORD" />
            </div>
          </form>
          <textarea
            className={styles['comments__text-input']}
            id="comment-input"
            name="comment-input"
            placeholder="댓글을 입력해주세요."
          />
        </div>
        <div className={styles['comments__button-area']}>
          <button className={styles['comments__button']}>작성하기</button>
        </div>
      </div>
    </div>
  );
};

export default CommentsInput;
