'use client';

import React from 'react';
import useSWR from 'swr';
import Loader from '../../ui/Loader';
import NewPostCard from './components/NewPostCard';

import styles from './NewPostList.module.scss';

interface SimpleCardProps {
  thumbnail: string;
  createdAt?: string;
  id?: string;
  title?: string;
  description?: string;
}

const NewPostList = () => {
  const { data: posts, isLoading: loading, error } = useSWR<SimpleCardProps[]>('/api/newPosts/');

  return (
    <>
      {loading && <Loader />}
      {posts && (
        <div className={styles['new-post-list']}>
          {posts?.map((post: SimpleCardProps) => (
            <NewPostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
};
export default NewPostList;
