import React from 'react';
import { getDescFilteredData } from '../../controller/CRUD';
import PostCard from '../../components/home/PostCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Posts',
  description: 'All Posts',
};

const page = async () => {
  // const data = await getDescFilteredData();

  return (
    <section className="flex justify-center mt-8 w-full mb-10">
      {/* <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold">Post</h2>
        <div className="md:w-12/12 lg:w-9/12 xl:w-8/12 flex flex-wrap justify-center">
          {data.map((item, i) => {
            return (
              <PostCard
                key={i}
                previewSrc={item.previewImg}
                title={item.title}
                description={item.description}
                date={item.date}
                id={String(item.id)}
              />
            );
          })}
        </div>
      </div> */}
    </section>
  );
};

export default page;
