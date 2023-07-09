'use client';

import React, { useState } from 'react';
import useSWR from 'swr';
import BookmarkIcon from './ui/icons/BookmarkIcon';
import HeartIcon from './ui/icons/HeartIcon';
import HeartFillIcon from './ui/icons/HeartFillIcon';
import BookmarkFillIcon from './ui/icons/BookmarkFillIcon';
import usePosts from '../hooks/posts';
import ToggleButton from './ui/ToggleButton';
import { useMe } from '@/hooks/bookmarks';

const SideBar = ({ post }: { post: any }) => {
  const { setLike } = usePosts();
  const { user, setBookmark } = useMe();

  const likes = post?.likes;

  const liked = user ? likes?.includes(user.username) : false;
  const bookmarked = user?.bookmarks.includes(post.id) ?? false;

  const handleLike = (like: boolean) => {
    user && setLike(post, user.username, like);
  };

  const handleBookmark = (bookmark: boolean) => {
    user && setBookmark(post.id, bookmark);
  };

  return (
    <>
      <div className="absolute shadow-md rounded-lg p-5 bg-gray-50 top-[8rem] left-[-7.5rem] flex flex-col items-center justify-center ">
        <ToggleButton toggled={liked} onToggle={handleLike} onIcon={<HeartFillIcon />} offIcon={<HeartIcon />} />
        <span className="mb-2">{likes?.length ?? 0}</span>
        <ToggleButton
          toggled={bookmarked}
          onToggle={handleBookmark}
          onIcon={<BookmarkFillIcon />}
          offIcon={<BookmarkIcon />}
        />
      </div>
    </>
  );
};

export default SideBar;
