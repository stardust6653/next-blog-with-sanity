import React from 'react';
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('../../components/editorView/TuiEditor'), {
  ssr: false,
});

const EditorPage = () => {
  return (
    <div className="flex justify-center mt-8 h-screen">
      <Editor />
    </div>
  );
};

export default EditorPage;
