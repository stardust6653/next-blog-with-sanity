import { parseDate } from '../util/date';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ViewIcon from './ui/icons/ViewIcon';
import HeartIcon from './ui/icons/HeartIcon';

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
  const { thumbnail, title, description, createdAt, id, viewCount, likes, date } = post;

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
          <div className="pl-3 pr-3 pb-3">
            <p className="text-xl font-extrabold mt-4 h-14 overflow-hidden">{title}</p>
            <p className="text-base mt-2 h-24">{description}</p>
            <div className="flex justify-between items-center">
              <div className="flex text-sm items-center text-gray-700">
                <ViewIcon size="text-xl" />
                <p className="ml-1 font-medium">{viewCount}</p>
                <HeartIcon size="ml-2 text-base" />
                <p className="ml-1 font-medium">{likes?.length ?? 0}</p>
              </div>
              <p className="font-semilight text-sm text-gray-700 font-medium">{parseDate(date)}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
