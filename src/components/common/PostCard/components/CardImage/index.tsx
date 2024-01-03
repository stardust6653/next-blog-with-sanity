import React from 'react';

import styles from './CardImage.module.scss';
import Image from 'next/image';

const CardImage = ({ data }) => {
  return (
    <Image
      fill
      src={data.thumbnail}
      alt={data.description}
      style={{ objectFit: 'cover' }}
      className="shadow-md rounded-xl overflow-hidden bg-no-repeat h-52 bg-center"
    />
  );
};

export default CardImage;
