'use client';

import { CardProps } from '@/components/common/PostCard';
import useSWR, { useSWRConfig } from 'swr';

type SimplePostProps = {
  comments: number;
  content: string;
  createdAt: string;
  description: string;
  id: string;
  likes: string[];
  thumbnail: string;
  title: string;
  viewCount: number;
};

async function updateLike(id: string, like: boolean) {
  fetch('/api/likes', {
    method: 'PUT',
    body: JSON.stringify({ id, like }),
  }).then((res) => res.json());
}

export default function usePosts() {
  const { data: posts, isLoading, error, mutate } = useSWR<any>(`/api/posts`);

  const setLike = (post: SimplePostProps, username: string, like: boolean) => {
    const likes = post.likes ?? [];

    const newPost = {
      ...post,
      likes: like ? [...likes, username] : likes.filter((item: string) => item !== username),
    };
    const newPosts = posts?.map((p: CardProps) => (p.id === post.id ? newPost : p));

    return mutate(updateLike(post.id, like), {
      optimisticData: newPosts,
      populateCache: false,
      revalidate: false,
      rollbackOnError: true,
    });
  };

  return { posts, isLoading, error, setLike };
}
