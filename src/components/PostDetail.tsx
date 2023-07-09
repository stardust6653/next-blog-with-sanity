'use client';

import React from 'react';
import Image from 'next/image';
import { parseDate } from '../util/date';
import SideBar from './SideBar';
import dynamic from 'next/dynamic';
import usePosts from '../hooks/posts';
import { CardProps } from './PostCard';
import { viewCountUpdate } from '../util/viewCountUpdate';

const MarkDownViewer = dynamic(() => import('./viewer/MarkDownViewer'), {
  ssr: false,
});

type Props = {
  params: {
    slug: string;
  };
};

const PostDetail = ({ params }: Props): any => {
  const id = params.slug;
  const { posts, isLoading: loading } = usePosts();

  if (posts !== undefined) {
    const arrayPosts: CardProps[] = Array.from(posts);

    const post = () => {
      return arrayPosts.filter((item: CardProps) => item.id === id)[0];
    };

    viewCountUpdate(post().id, post().viewCount);

    return (
      <>
        {loading && <p>로딩 중입니당</p>}

        {post() && (
          <article className="sm: w-11/12 m-5 xl:w-7/12 mt-12 mb-12 relative">
            <SideBar post={post()} />
            <div>
              <h1 className="sm: text-3xl xl:text-5xl font-bold mb-6">{post()?.title}</h1>
              <p className="mb-4 text-end">{parseDate(post()?.createdAt)}</p>
              <Image
                src={post()?.thumbnail}
                alt=""
                width="320"
                height="208"
                style={{ objectFit: 'cover' }}
                className="shadow-md rounded-xl overflow-hidden bg-no-repeat h-52 bg-center"
              />
              <MarkDownViewer html={post()?.content} />
            </div>
          </article>
        )}
      </>
    );
  }
};

export default PostDetail;
