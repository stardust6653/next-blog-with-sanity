'use client';

import React from 'react';
import Image from 'next/image';
import { parseDate } from '../../../util/date';
import SideBar from '../SideBar';
import dynamic from 'next/dynamic';
import usePosts from '../../../hooks/posts';
import { viewCountUpdate } from '../../../util/viewCountUpdate';
import Loader from '../../common/Loader';
import { useMe } from '../../../hooks/bookmarks';
import { CardProps } from '../../common/PostCard';

import styles from './PostDetail.module.scss';
import PostViewer from '../PostViewer';

const MarkDownViewer = dynamic(() => import('../../viewer/MarkDownViewer'), {
  ssr: false,
});

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
    const arrayPosts: CardProps[] = Array.from(posts);

    const post = () => {
      return arrayPosts.filter((item: CardProps) => item.id === id)[0];
    };

    if (!ownership) {
      viewCountUpdate(post()?.id, post().viewCount);
    }

    return (
      <>
        {loading && <Loader />}

        {post() && (
          <article className={styles['post-detail']}>
            <div
              className={styles['post-detail__title-group']}
              style={{ background: `url(${post()?.thumbnail}) no-repeat center center`, backgroundSize: 'cover' }}
            >
              <SideBar post={post()} />
              <div className={styles['post-detail__title-box']}>
                <h1 className={styles['post-detail__title']}>{post()?.title}</h1>
                <p className={styles['post-detail__created-date']}>{parseDate(post()?.date)}</p>
              </div>
            </div>
            <div className={styles['post-detail__viewer']}>
              <PostViewer post={post()} />
            </div>
          </article>
        )}
      </>
    );
  }
};

export default PostDetail;