'use client';

import React from 'react';
import useSWR from 'swr';

import usePosts from '../hooks/posts';
import Loader from './ui/Loader';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import PostCard from './post/PostCard';

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
        <ul className="grid grid-cols-1 w-full lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {posts?.map((post: CardProps, index: number) => (
            <li key={post.id}>
              <PostCard key={index} post={post} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default BookmarkList;
