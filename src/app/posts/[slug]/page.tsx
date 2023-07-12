import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Metadata } from 'next';
import PostDetail from '../../..//components/PostDetail';
import { getDetailPost } from '../../../service/posts';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getDetailPost(params.slug);

  return {
    title: post[0]?.title,
    description: post[0]?.description,
  };
}

const DetailPage = async ({ params }: Props) => {
  const post = await getDetailPost(params.slug);
  console.log(post.title);
  return (
    <>
      <div className="relative flex justify-center overflow-scroll w-full">
        <PostDetail params={params} />
      </div>
    </>
  );
};

export default DetailPage;
