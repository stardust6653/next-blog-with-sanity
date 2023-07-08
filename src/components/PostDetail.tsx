'use client';

import React from 'react';
import useSWR from 'swr';
import MarkDownViewer from './viewer/MarkDownViewer';
import Image from 'next/image';
import { parseDate } from '@/util/date';

type Props = {
  slug: string;
};

const PostDetail = ({ params }: any) => {
  const id = params.slug;
  const { data: post, isLoading: loading, error } = useSWR(`/api/posts/${id}`);

  return (
    <>
      {post && (
        <article className="sm: w-11/12 m-5 xl:w-7/12 mt-12 mb-12">
          <h1 className="sm: text-3xl xl:text-5xl font-bold mb-6">{post[0].title}</h1>
          <p className="mb-4 text-end">발행일 : {parseDate(post[0].createdAt)}</p>
          <Image
            src={post[0].thumbnail}
            alt=""
            width="320"
            height="208"
            placeholder="blur"
            blurDataURL={post[0].thumbnail}
            style={{ objectFit: 'cover' }}
            className="shadow-md rounded-xl overflow-hidden bg-no-repeat h-52 bg-center"
          />
          <MarkDownViewer html={post[0].content} />
        </article>
      )}
    </>
  );
};

export default PostDetail;
