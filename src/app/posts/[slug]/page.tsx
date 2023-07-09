import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Metadata } from 'next';
import PostDetail from '../../..//components/PostDetail';

interface Props {
  params: {
    slug: string;
  };
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const data = await getDescFilteredData();
//   const currentData = data.filter((item) => String(item.id) === params.slug);

//   return {
//     title: currentData[0].title,
//     description: currentData[0].description,
//   };
// }

const DetailPage = async ({ params }: Props) => {
  return (
    <>
      <div className="relative flex justify-center overflow-scroll w-full">
        <PostDetail params={params} />
      </div>
    </>
  );
};

export default DetailPage;
