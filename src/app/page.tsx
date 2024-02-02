import React from 'react';

import PageTitle from '../components/common/PageTitle';
import Introduction from '@/components/main/Introduction';
import CenterAlignment from '@/components/common/layout/CenterAlignment';
import dynamic from 'next/dynamic';

const Home = async () => {
  const NewPostList = dynamic(() => import('../components/main/NewPostList'), { ssr: false });

  return (
    <>
      <CenterAlignment>
        <Introduction />
      </CenterAlignment>

      <CenterAlignment direction="COLUMN">
        <PageTitle text="New Posts" />
        <NewPostList />
      </CenterAlignment>
    </>
  );
};

export default Home;
