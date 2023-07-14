'use client';

import React, { FormEvent, useState } from 'react';
import useSWR from 'swr';
import PostCard from './PostCard';
import SearchBar from './SearchBar';
import useDebounce from '../hooks/debounce';
import Loader from './ui/Loader';
import DoNotFindPost from './DoNotFindPost';

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
  const [keyword, setKeyword] = useState('');
  const debounceKeyword = useDebounce(keyword);
  const { data: posts, isLoading, error } = useSWR(`/api/search/${debounceKeyword}*`);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="lg:w-[1440px] md:w-[90%]">
      <SearchBar onSubmit={onSubmit} setKeyword={setKeyword} keyword={keyword} />

      {posts && (
        <ul className="grid grid-cols-1 w-full lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {posts?.map((post: CardProps, index: number) => (
            <li key={post.id}>
              <PostCard key={index} post={post} />
            </li>
          ))}
        </ul>
      )}
      {error && <p>잘못됨요!</p>}
      {isLoading && <Loader />}
      {!isLoading && !error && posts?.length === 0 && <DoNotFindPost />}
    </div>
  );
};
export default PostList;
