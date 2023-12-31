import React from 'react';

import styles from './PostViewer.module.scss';
import SideBar from '../SideBar';
import ListViewButton from './components/ListViewButton';

interface Props {
  post: any;
}

const PostViewer = ({ post }: Props) => {
  return (
    <div className={styles['post-viewer__group']}>
      <div className={styles['post-viewer']}>
        <div className={styles['post-viewer__content']} dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <ListViewButton />
    </div>
  );
};

export default PostViewer;
