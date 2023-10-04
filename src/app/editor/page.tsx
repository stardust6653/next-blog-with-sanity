import React from 'react';
import dynamic from 'next/dynamic';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const Editor = dynamic(() => import('../../components/editorView/TuiEditor'), {
  ssr: false,
});

const EditorPage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (user?.email !== 'stardust6653@gmail.com') {
    redirect('/');
  }

  return (
    <div className="flex justify-center mt-8 h-screen">
      <Editor />
    </div>
  );
};

export default EditorPage;
