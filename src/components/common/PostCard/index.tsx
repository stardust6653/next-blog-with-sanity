import Link from 'next/link';
import React from 'react';

import styles from './PostCard.module.scss';
import CardImage from './components/CardImage';
import CardInfo from './components/CardInfo';
import { Comment, SaveComment } from '../../../../types/types';

export interface CardProps {
  thumbnail: string;
  comments: SaveComment[];
  commentsCount: number | null;
  content: string;
  createdAt: string;
  id: string;
  likes: string[];
  title: string;
  description: string;
  viewCount: number;
  date: string;
}

const PostCard = ({ post }: any) => {
  const { id } = post;

  return (
    <Link href={`/posts/${id}`}>
      <div className={styles['post-card']}>
        <div className={styles['post-card__image']}>
          <CardImage data={post} />
        </div>
        <CardInfo data={post} />
      </div>
    </Link>
  );
};

export default PostCard;
