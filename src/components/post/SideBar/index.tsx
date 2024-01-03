'use client';

import React, { useState } from 'react';
import BookmarkIcon from '../../ui/icons/BookmarkIcon';
import HeartIcon from '../../ui/icons/HeartIcon';
import HeartFillIcon from '../../ui/icons/HeartFillIcon';
import BookmarkFillIcon from '../../ui/icons/BookmarkFillIcon';
import usePosts from '../../../hooks/posts';
import ToggleButton from '../../ui/ToggleButton';
import { useMe } from '../../../hooks/bookmarks';

import styles from './SideBar.module.scss';

const SideBar = ({ post }: { post: any }) => {
  const { setLike } = usePosts();
  const { user, setBookmark } = useMe();

  const likes = post?.likes;

  const liked = user ? likes?.includes(user.username) : false;
  const bookmarked = user?.bookmarks?.includes(post.id) ?? false;

  const handleLike = (like: boolean) => {
    user && setLike(post, user.username, like);
  };

  const handleBookmark = (bookmark: boolean) => {
    user && setBookmark(post.id, bookmark);
  };

  return (
    <>
      <div className={styles['side-bar']}>
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
