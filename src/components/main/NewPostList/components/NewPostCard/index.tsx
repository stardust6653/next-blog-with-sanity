import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './NewPostCard.module.scss';

const NewPostCard = ({ post }: any) => {
  const { thumbnail, title, description, id } = post;

  return (
    <div className={styles['new-post-card']}>
      <Link href={`/posts/${id}`}>
        <div className={styles['new-post-card__image']}>
          <Image fill src={thumbnail} alt={description} style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles['new-post-card__text-group']}>
          <p className={styles['new-post-card__title']}>{title}</p>
          <p className={styles['new-post-card__description']}>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default NewPostCard;
