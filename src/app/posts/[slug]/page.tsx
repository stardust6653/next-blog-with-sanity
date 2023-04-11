import React from 'react';
import dynamic from 'next/dynamic';

const MarkDownViewer = dynamic(() => import('../../../components/viewer/MarkDownViewer'), {
  ssr: false,
});

const page = () => {
  return (
    <div className="flex justify-center overflow-scroll">
      <article className="mt-12 mb-12 w-1/2">
        <h1 className="text-5xl font-bold mb-6">Title</h1>
        <MarkDownViewer />
      </article>
    </div>
  );
};

export default page;
