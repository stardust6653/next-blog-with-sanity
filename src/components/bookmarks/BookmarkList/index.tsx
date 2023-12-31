'use client';

import React from 'react';
import useSWR from 'swr';

import Loader from '../../common/Loader';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import PostCard from '../../common/PostCard';

import styles from './BookmarkList.module.scss';

interface CardProps {
  thumbnail?: string;
  comments?: number;
  content?: string;
  createdAt?: string;
  id?: string;
  likes?: string[];
  title?: string;
  description?: string;
}

const BookmarkList = () => {
  const { data: session } = useSession();
  const user = session?.user;

  if (!session) {
    redirect('/');
  }

  const { data: posts, isLoading: loading } = useSWR('/api/bookmarksPost');

  return (
    <>
      {loading && <Loader />}

      {posts && (
        <div className={styles['bookmark-list']}>
          {posts?.map((post: CardProps, index: number) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
};
export default BookmarkList;
