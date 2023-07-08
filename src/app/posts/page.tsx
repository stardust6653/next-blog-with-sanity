import React from 'react';
import PostCard from '../../components/PostCard';
import { Metadata } from 'next';
import PostList from '../../components/PostList';

export const metadata: Metadata = {
  title: 'All Posts',
  description: 'All Posts',
};

const page = async () => {
  return (
    <div className="w-[1440px] flex flex-col items-center ml-auto mr-auto">
      <h2 className="text-4xl font-bold pt-8 text-center">Posts</h2>
      <section className="grid grid-cols-4 w-full ml-auto mr-auto">
        <PostList />
      </section>
    </div>
  );
};

export default page;
