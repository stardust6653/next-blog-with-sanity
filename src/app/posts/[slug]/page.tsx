import React, { Suspense } from 'react';
import { Metadata } from 'next';
import PostDetail from '../../../components/post/PostDetail';
import { getDetailPost } from '../../../service/posts';
import Loader from '@/components/common/Loader';

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
      images: [
        {
          url: post[0]?.thumbnail,
        },
      ],
    },
    twitter: {
      title: post[0]?.title,
      description: post[0]?.description,
      images: [
        {
          url: post[0]?.thumbnail,
        },
      ],
    },
  };
}

const DetailPage = async ({ params }: Props) => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <PostDetail params={params} />
      </Suspense>
    </>
  );
};

export default DetailPage;
