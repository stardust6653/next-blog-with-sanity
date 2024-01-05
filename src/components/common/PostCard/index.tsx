import Link from 'next/link';
import React from 'react';

import styles from './PostCard.module.scss';
import CardImage from './components/CardImage';
import CardInfo from './components/CardInfo';
import { Card, SaveComment } from '../../../../types/types';

interface Props {
  post: Card;
  type: 'NEW' | 'POST';
}

const PostCard = ({ post, type }: Props) => {
  const { id } = post;

  return (
    <Link href={`/posts/${id}`}>
      <div className={styles['post-card']}>
        <div className={styles['post-card__image']}>
          <CardImage data={post} />
        </div>
        <CardInfo data={post} type={type} />
      </div>
    </Link>
  );
};

export default PostCard;
