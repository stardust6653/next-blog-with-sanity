import React from 'react';
import { Metadata } from 'next';
import PageTitle from '../../../components/common/PageTitle';
import BookmarkList from '@/components/bookmarks/BookmarkList';

export const metadata: Metadata = {
  title: 'All Posts',
  description: 'All Posts',
};

const page = async () => {
  return (
    <div className="w-[90%] lg:w-[1440px] flex flex-col items-center ml-auto mr-auto">
      <PageTitle text="Bookmarks" />
      <section className="w-full ml-auto mr-auto">
        <BookmarkList />
      </section>
    </div>
  );
};

export default page;
