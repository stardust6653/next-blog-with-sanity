'use client';

import React from 'react';
import useSWR from 'swr';
import Loader from './ui/Loader';
import NewPostCard from './NewPostCard';

interface SimpleCardProps {
  thumbnail: string;
  createdAt?: string;
  id?: string;
  title?: string;
  description?: string;
}

const NewPostList = () => {
  const { data: posts, isLoading: loading, error } = useSWR<SimpleCardProps[]>('/api/newPosts/');

  console.log(posts, 'newpostlist');

  return (
    <div className="w-[1440px]">
      {loading && <Loader />}

      {posts && (
        <ul className="grid grid-cols-4 w-full">
          {posts?.map((post: SimpleCardProps, index: number) => (
            <li key={post.id}>
              <NewPostCard key={index} post={post} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default NewPostList;
