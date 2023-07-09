'use client';

import React from 'react';
import useSWR from 'swr';
import PostCard from './PostCard';
import usePosts from '@/hooks/posts';

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

const PostList = () => {
  const { posts, isLoading: loading } = usePosts();

  return (
    <>
      {loading && <p>로딩중입니당</p>}

      {posts && (
        <ul className="grid grid-cols-4 w-full">
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
export default PostList;
