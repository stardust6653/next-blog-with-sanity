'use client';

import React from 'react';
import useSWR from 'swr';
import Loader from '../../common/Loader';

import styles from './NewPostList.module.scss';
import ListViewButton from '@/components/post/PostViewer/components/ListViewButton';
import PostCard from '@/components/common/PostCard';
import { Card } from '../../../../types/types';

interface SimpleCardProps {
  thumbnail: string;
  createdAt?: string;
  id?: string;
  title?: string;
  description?: string;
}

const NewPostList = () => {
  const { data: posts, isLoading: loading, error } = useSWR<Card[]>('/api/newPosts/');

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          {posts && (
            <div className={styles['new-post-list']}>
              {posts?.map((post: Card) => (
                <PostCard key={post.id} post={post} type="NEW" />
              ))}
            </div>
          )}
          <ListViewButton />
        </>
      )}
    </>
  );
};
export default NewPostList;
