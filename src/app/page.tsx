import React from 'react';

import PageTitle from '../components/ui/PageTitle';
import Introduction from '@/components/main/Introduction';
import NewPostList from '@/components/main/NewPostList';
import CenterAlignment from '@/components/common/CenterAlignment';

const Home = async () => {
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
