import React from 'react';

const PageTitle = ({ text }: { text: string }) => {
  return <h2 className="text-4xl font-bold pt-12 pb-8 text-center">{text}</h2>;
};

export default PageTitle;
