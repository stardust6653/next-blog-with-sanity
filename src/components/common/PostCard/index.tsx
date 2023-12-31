import Link from 'next/link';
import React from 'react';

import styles from './PostCard.module.scss';
import CardImage from './components/CardImage';
import CardInfo from './components/CardInfo';

export interface CardProps {
  thumbnail: string;
  comments: number;
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
