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
    <>
      <h2 className="text-4xl font-bold pt-8 text-center">Posts</h2>
      <section className="grid grid-cols-4 gap-2">
        <PostList />
      </section>
    </>
  );
};

export default page;
