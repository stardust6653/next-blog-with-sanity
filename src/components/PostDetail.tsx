'use client';

import React from 'react';
import Image from 'next/image';
import { parseDate } from '../util/date';
import SideBar from './SideBar';
import dynamic from 'next/dynamic';
import usePosts from '../hooks/posts';
import { CardProps } from './PostCard';
import { viewCountUpdate } from '../util/viewCountUpdate';
import Loader from './ui/Loader';
import { useMe } from '../hooks/bookmarks';

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
  const { user } = useMe();
  const ownership = user?.owner;

  if (posts !== undefined) {
    const arrayPosts: CardProps[] = Array.from(posts);

    const post = () => {
      return arrayPosts.filter((item: CardProps) => item.id === id)[0];
    };

    if (!ownership) {
      viewCountUpdate(post()?.id, post().viewCount);
    }

    return (
      <>
        {loading && <Loader />}

        {post() && (
          <article className="m-5 mt-12 mb-12 relative xs:w-[90%] sm:w-[60%] lg:w-[50%]">
            <SideBar post={post()} />
            <div>
              <h1 className="sm: text-3xl xl:text-5xl font-bold mb-6">{post()?.title}</h1>
              <p className="mb-4 text-end">{parseDate(post()?.date)}</p>
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
