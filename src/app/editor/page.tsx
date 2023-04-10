import React from 'react';
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('../../components/editorView/TuiEditor'), {
  ssr: false,
});

const page = () => {
  return (
    <div className="flex justify-center m-8">
      <Editor />
    </div>
  );
};

export default page;
