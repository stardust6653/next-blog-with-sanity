'use client';

import React from 'react';
import { parseDate } from '../../../util/date';
import SideBar from '../SideBar';
import usePosts from '../../../hooks/posts';
import { viewCountUpdate } from '../../../util/viewCountUpdate';
import Loader from '../../common/Loader';
import { useMe } from '../../../hooks/bookmarks';
import styles from './PostDetail.module.scss';
import PostViewer from '../PostViewer';
import CommentsInput from '../CommentsInput';
import ListViewButton from '../PostViewer/components/ListViewButton';
import CommentsListView from '../CommentsListView';
import { Card } from '../../../../types/types';

type Props = {
  params: {
    slug: string;
  };
};

const PostDetail = ({ params }: Props): any => {
  const id = params.slug;
  const { posts, isLoading: loading } = usePosts();
  const { user } = useMe();
  const ownership = user?.owner;

  if (posts !== undefined) {
    const arrayPosts: Card[] = Array.from(posts);

    const post = () => {
      return arrayPosts.filter((item: Card) => item.id === id)[0];
    };

    if (!ownership) {
      viewCountUpdate(post()?.id, post().viewCount);
    }

    return (
      <>
        {loading && <Loader />}
        <article className={styles['post-detail']}>
          {post() && (
            <>
              <div
                className={styles['post-detail__title-group']}
                style={{ background: `url(${post()?.thumbnail}) no-repeat center center`, backgroundSize: 'cover' }}
              >
                <SideBar post={post()} />
                <div className={styles['post-detail__title-box']}>
                  <div>
                    <h1 className={styles['post-detail__title']}>{post()?.title}</h1>
                    <p className={styles['post-detail__description']}>{post()?.description}</p>
                  </div>
                  <p className={styles['post-detail__created-date']}>{parseDate(post()?.date)}</p>
                </div>
              </div>

              <div className={styles['post-detail__viewer']}>
                <PostViewer post={post()} />
              </div>
            </>
          )}
          {/* <div className={styles['post-detail__comments']}>
            <CommentsInput id={id} commentsCount={post().commentsCount} />
          </div>
          <div className={styles['post-detail__comments-list-view']}>
            <CommentsListView comments={post().comments} postId={id} commentsCount={post().commentsCount} />
          </div> */}
          <ListViewButton />
        </article>
      </>
    );
  }
};

export default PostDetail;
