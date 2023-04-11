import Image from 'next/image';
import React from 'react';

interface CardProps {
  previewSrc: string;
  description: string;
  date: string;
  title: string;
}

const PostCard = ({ previewSrc, description, date, title }: CardProps) => {
  return (
    <div className="w-80 m-3 mt-10 hover:-translate-y-1 hover:shadow-md hover:duration-300">
      <Image
        src={previewSrc}
        alt=""
        width="320"
        height="208"
        placeholder="blur"
        blurDataURL={previewSrc}
        style={{ objectFit: 'cover' }}
        className="shadow-md rounded-xl overflow-hidden bg-no-repeat h-52 bg-center"
      />
      <div className="pl-3 pr-3 pb-3">
        <p className="text-xl font-extrabold mt-4">{title}</p>
        <p className="text-base mt-2 h-24">
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
        </p>
        {/* <span className="bg-blue-400 text-neutral-100 p-4 pt-2 pb-2 mt-3 mr-3 rounded-2xl inline-block leading-4">
          git
        </span>
        <span className="bg-blue-400 text-neutral-100 p-4 pt-2 pb-2 mt-3 mr-3 rounded-2xl inline-block leading-4">
          message
        </span> */}
        <p className="font-semilight text-sm mt-2 text-right">{date}</p>
      </div>
    </div>
  );
};

export default PostCard;
