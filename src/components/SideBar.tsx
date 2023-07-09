'use client';

import React, { useState } from 'react';
import useSWR from 'swr';
import BookmarkIcon from './ui/icons/BookmarkIcon';
import HeartIcon from './ui/icons/HeartIcon';
import HeartFillIcon from './ui/icons/HeartFillIcon';
import BookmarkFillIcon from './ui/icons/BookmarkFillIcon';
import { useSession } from 'next-auth/react';
import usePosts from '@/hooks/posts';
import ToggleButton from './ui/toggleButton';

const SideBar = ({ post }: { post: any }) => {
  const { setLike } = usePosts();
  const { data: session } = useSession();
  const user = session?.user;
  const likes = post?.likes;

  const liked = user ? likes?.includes(user.username) : false;
  const [filledBookmark, setFilledBookmark] = useState<boolean>(false);

  const handleLike = (like: boolean) => {
    if (user) {
      setLike(post, user.username, like);
    }
  };

  return (
    <div className="absolute shadow-md rounded-lg p-5 bg-gray-50 top-[8rem] left-[-7.5rem] flex flex-col items-center justify-center ">
      <ToggleButton toggled={liked} onToggle={handleLike} onIcon={<HeartFillIcon />} offIcon={<HeartIcon />} />
      <span className="mb-2">{likes?.length ?? 0}</span>
      {filledBookmark ? <BookmarkFillIcon /> : <BookmarkIcon />}
    </div>
  );
};

export default SideBar;
