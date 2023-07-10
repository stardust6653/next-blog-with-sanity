'use client';

import React from 'react';
import useSWR from 'swr';
import PostCard from './PostCard';
import Loader from './ui/Loader';

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

const NewPostList = () => {
  const { data: posts, isLoading: loading, error } = useSWR<CardProps[]>('/api/newPosts/');

  return (
    <div className="w-[1440px]">
      {loading && <Loader />}

      {posts && (
        <ul className="grid grid-cols-4 w-full">
          {posts?.map((post: CardProps, index: number) => (
            <li key={post.id}>
              <PostCard key={index} post={post} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default NewPostList;
