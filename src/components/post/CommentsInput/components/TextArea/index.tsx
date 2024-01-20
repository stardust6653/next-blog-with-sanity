import React, { Dispatch, SetStateAction } from 'react';

import styles from './TextArea.module.scss';

interface Props {
  setContent: Dispatch<SetStateAction<string>>;
  content: string;
}

const TextArea = ({ setContent, content }: Props) => {
  return (
    <textarea
      minLength={2}
      maxLength={240}
      value={content}
      onChange={(e) => {
        setContent(e.currentTarget.value);
      }}
      className={styles['text-area__text-input']}
      id="comment-input"
      name="comment-input"
      placeholder="댓글을 입력해주세요."
    />
  );
};

export default TextArea;
