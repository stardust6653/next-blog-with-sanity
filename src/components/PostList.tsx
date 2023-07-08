'use client';

import React from 'react';
import useSWR from 'swr';
import PostCard from './PostCard';

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
  const { data: posts, error } = useSWR<CardProps[]>('/api/posts/');

  return (
    <>
      {posts?.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </>
  );
};
export default PostList;
