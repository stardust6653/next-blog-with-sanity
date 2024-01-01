import React from 'react';

import styles from './PostViewer.module.scss';

interface Props {
  post: any;
}

const PostViewer = ({ post }: Props) => {
  return (
    <div className={styles['post-viewer__group']}>
      <div className={styles['post-viewer']}>
        <div className={styles['post-viewer__content']} dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default PostViewer;
