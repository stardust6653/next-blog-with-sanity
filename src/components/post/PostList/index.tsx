'use client';

import React, { FormEvent, useState } from 'react';
import useSWR from 'swr';
import PostCard from '../../common/PostCard';
import SearchBar from '../SearchBar';
import useDebounce from '../../../hooks/debounce';
import Loader from '../../common/Loader';
import DoNotFindPost from '../../DoNotFindPost';

import styles from './PostList.module.scss';

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
    <div className={styles['post-list']}>
      <SearchBar onSubmit={onSubmit} setKeyword={setKeyword} keyword={keyword} />

      <div className={styles['post-list__list']}>
        {posts && (
          <>
            {posts?.map((post: CardProps) => (
              <PostCard key={post.id} post={post} />
            ))}
          </>
        )}
      </div>
      {error && <p>잘못됨요!</p>}
      {isLoading && <Loader />}
      {!isLoading && !error && posts?.length === 0 && <DoNotFindPost />}
    </div>
  );
};
export default PostList;
