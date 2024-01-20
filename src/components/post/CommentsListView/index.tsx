'use client';

import React from 'react';

import styles from './CommentsListView.module.scss';
import CommentItem from './components/CommentItem';
import { Comment, SaveComment } from '../../../../types/types';

interface Props {
  post: any;
  comments: SaveComment[];
  postId: string;
  commentsCount: number | null;
}

const CommentsListView = ({ post, comments, postId, commentsCount }: Props) => {
  return (
    <div className={styles['comments-list-view']}>
      {commentsCount !== 0 ? (
        <>
          {comments?.map((item) => {
            return <CommentItem post={post} key={item.id} data={item} postId={postId} />;
          })}
        </>
      ) : (
        <div className={styles['comments-list_no-comment']}>
          <div>아직 댓글이 달리지 않았어요! 🥲</div>
          <div>댓글 하나 달아주시겠어요? 😊</div>
        </div>
      )}
    </div>
  );
};

export default CommentsListView;
