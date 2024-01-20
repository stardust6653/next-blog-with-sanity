'use client';

import useSWR from 'swr';
import { Card, Comment, SaveComment } from '../../types/types';
import { patchComment } from '../util/patchComment';
import { deleteComment } from '../util/deleteComment';

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
    const newPosts = posts?.map((p: Card) => (p.id === post.id ? newPost : p));

    return mutate(updateLike(post.id, like), {
      optimisticData: newPosts,
      populateCache: false,
      revalidate: false,
      rollbackOnError: true,
    });
  };

  const setComments = (post: any, writingComment: Comment) => {
    const newPost = {
      ...post,
      comments: writingComment ? [...post.comments, writingComment] : post.comments,
      commentsCount: post.commentsCount + 1,
    };

    const newPosts = posts?.map((p: Card) => (p.id === post.id ? newPost : p));

    return mutate(patchComment(writingComment), {
      optimisticData: newPosts,
      populateCache: false,
      revalidate: false,
      rollbackOnError: true,
    });
  };

  const deleteComments = (post: any, comments: any, postId: string) => {
    const newPost = {
      ...post,
      comments: postId ? post.comments.filter((item: SaveComment) => item._key !== comments._key) : post.comments,
      commentsCount: post.commentsCount - 1,
    };

    const newPosts = posts?.map((p: Card) => (p.id === post.id ? newPost : p));

    return mutate(deleteComment(comments, postId), {
      optimisticData: newPosts,
      populateCache: false,
      revalidate: false,
      rollbackOnError: true,
    });
  };

  return { posts, isLoading, error, setLike, setComments, deleteComments };
}
