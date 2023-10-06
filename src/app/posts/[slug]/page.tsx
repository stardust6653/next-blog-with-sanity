import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Metadata } from 'next';
import PostDetail from '../../..//components/PostDetail';
import { getDetailPost } from '../../../service/posts';
import Head from 'next/head';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getDetailPost(params.slug);

  return {
    openGraph: {
      title: post[0]?.title,
      description: post[0]?.description,
      url: `https://www.soyeah-blog.xyz/posts/${post[0]?.id}`,
      siteName: 'Soyeah Blog(박소예의 개발 블로그)',
      images: [
        {
          url: post[0]?.thumbnail,
          width: 800,
          height: 600,
        },
      ],
      locale: 'ko_KR',
      type: 'website',
    },
  };
}

const DetailPage = async ({ params }: Props) => {
  const post = await getDetailPost(params.slug);

  return (
    <>
      <div className="relative flex justify-center overflow-scroll w-full">
        <PostDetail params={params} />
      </div>
    </>
  );
};

export default DetailPage;
