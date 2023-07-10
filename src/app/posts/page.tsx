import React from 'react';
import PostCard from '../../components/PostCard';
import { Metadata } from 'next';
import PostList from '../../components/PostList';
import PageTitle from '../../components/ui/PageTitle';

export const metadata: Metadata = {
  title: 'All Posts',
  description: 'All Posts',
};

const page = async () => {
  return (
    <div className="flex flex-col items-center relative justify-center ">
      <PageTitle text="Posts" />
      <PostList />
    </div>
  );
};

export default page;
