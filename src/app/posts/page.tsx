import PostCard from '@/components/home/PostCard';
import { getDescFilteredData } from '@/controller/CRUD';
import React from 'react';

const page = async () => {
  const data = await getDescFilteredData();

  return (
    <section className="flex justify-center mt-8 w-full mb-10">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold">Post</h2>
        <div className="flex flex-wrap justify-center w-7/12">
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
      </div>
    </section>
  );
};

export default page;
