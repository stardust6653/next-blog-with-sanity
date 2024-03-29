import React from 'react';
import { Metadata } from 'next';
import PostList from '../../components/post/PostList';
import PageTitle from '../../components/common/PageTitle';
import Layout from '../../components/common/layout/Layout';

export const metadata: Metadata = {
  title: 'All Posts',
  description: 'All Posts',
};

const page = async () => {
  return (
    <Layout>
      <PageTitle text="Posts" />
      <PostList />
    </Layout>
  );
};

export default page;
