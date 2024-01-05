'use client';

import React, { FormEvent, useEffect, useState } from 'react';
import useSWR from 'swr';
import PostCard from '../../common/PostCard';
import SearchBar from '../SearchBar';
import useDebounce from '../../../hooks/debounce';
import Loader from '../../common/Loader';
import DoNotFindPost from '../../DoNotFindPost';

import styles from './PostList.module.scss';
import PaginationButton from '@/components/common/PaginationButton';
import { Card } from '../../../../types/types';

const PostList = () => {
  const contentLength: number = useSWR(`/api/posts/`).data?.length;

  const [page, setPage] = useState(0);
  const [keyword, setKeyword] = useState('');
  const debounceKeyword = useDebounce(keyword);

  const { data: posts, isLoading, error } = useSWR([`/api/search/${debounceKeyword}*?page=${page}`]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles['post-list']}>
      <SearchBar onSubmit={onSubmit} setKeyword={setKeyword} keyword={keyword} />
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          {error && !isLoading && <p>잘못됨요!</p>}
          <div className={styles['post-list__list']}>
            {posts && (
              <>
                {posts?.map((post: Card) => (
                  <PostCard key={post.id} post={post} type="POST" />
                ))}
              </>
            )}
          </div>

          {contentLength && <PaginationButton contentLength={contentLength} setPage={setPage} page={page + 1} />}
        </>
      )}

      {!isLoading && !error && posts?.length === 0 && <DoNotFindPost />}
    </div>
  );
};
export default PostList;
