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
    title: post[0]?.title,
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
      <Head>
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={`https://www.soyeah-blog.xyz/${post[0].id}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={post[0]?.title} />
        <meta property="og:description" content={post[0]?.description} />
        <meta property="og:image" content={post[0]?.thumbnail} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="www.soyeah-blog.xyz" />
        <meta property="twitter:url" content={`https://www.soyeah-blog.xyz/${post[0].id}`} />
        <meta name="twitter:title" content={post[0]?.title} />
        <meta name="twitter:description" content={post[0]?.description} />
        <meta name="twitter:image" content={post[0]?.thumbnail} />

        {/* <title>{`Soyeah Blog | ${post[0]?.title}`}</title>
        <meta property="og:title" content={post[0]?.title} />
        <meta property="og:description" content={post[0]?.description} />
        <meta property="og:url" content={`https://www.soyeah-blog.xyz/posts/${post[0]?.id}`} />
        <meta property="og:site_name" content="Soyeah Blog(박소예의 개발 블로그)" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:image" content={post[0]?.thumbnail} />
        <meta property="og:image:alt" content="프론트엔드 개발자 Soye의 블로그" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="soyeah-blog.xyz" />
        <meta property="twitter:url" content={`https://www.soyeah-blog.xyz/posts/${post[0]?.id}`} />
        <meta name="twitter:title" content={post[0].title} />
        <meta name="twitter:description" content={post[0]?.description} />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/blog-project-97597.appspot.com/o/images%2F800_600.webp?alt=media&token=81483264-6c85-498a-a18d-71e5ac9b70f2"
        /> */}
      </Head>
      <div className="relative flex justify-center overflow-scroll w-full">
        <PostDetail params={params} />
      </div>
    </>
  );
};

export default DetailPage;
