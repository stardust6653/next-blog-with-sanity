import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewPostCard = ({ post }: any) => {
  const { thumbnail, title, description, id, date } = post;

  return (
    <div className="flex justify-center">
      <Link href={`/posts/${id}`}>
        <div className="w-80 m-6 mt-10 hover:-translate-y-1 hover:shadow-md hover:duration-300">
          <Image
            src={thumbnail}
            alt={description}
            width={320}
            height={280}
            style={{ objectFit: 'cover' }}
            className="shadow-md rounded-xl overflow-hidden bg-no-repeat h-52 bg-center"
          />
          <div className="pl-3 pr-3 pb-1">
            <p className="text-xl font-extrabold mt-4 h-14 overflow-hidden">{title}</p>
            <p className="text-base mt-3 h-24">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewPostCard;
