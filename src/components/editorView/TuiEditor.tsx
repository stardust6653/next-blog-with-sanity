'use client';

import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

import React, { useState } from 'react';
import MoreInfo from './MoreInfo';
import TitleInput from '../editor/TitleInput';
import ToastUiEditor from '../editor/ToastUiEditor';
import EditorButton from '../editor/EditorButton';
import useSWR from 'swr';
import { redirect, useRouter } from 'next/navigation';
import Loader from '../common/Loader';

type LoadedDataProps = {
  title: string;
  content: string;
  description: string;
  imgUrl: string;
};

const TuiEditor = () => {
  const { data, isLoading, error } = useSWR('/api/ownership');
  const ownership = data?.[1];

  const [title, setTitle] = useState<string>('');
  const [modalVisiable, setModalVisible] = useState<boolean>(false);
  const [content, setContent] = useState<string>('');

  const [loadedTitle, setLoadedTitle] = useState<string>('');
  const [loadedContent, setLoadedContent] = useState<string>('');

  const router = useRouter();

  const loadData = () => {
    if (localStorage.getItem('save')) {
      const saveData: any = localStorage.getItem('save');
      const data = JSON.parse(saveData);
      setLoadedTitle(data.title);
      setLoadedContent(data.content);
    }
  };

  return (
    <>
      {modalVisiable ? (
        <MoreInfo setModalVisible={() => setModalVisible(false)} title={title} content={content} />
      ) : (
        <>
          <form
            className="w-[95%]"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <TitleInput setTitle={setTitle} loadedTitle={loadedTitle} />
            <ToastUiEditor setContent={setContent} loadedContent={loadedContent} />

            <div className="flex justify-end mr-3">
              <EditorButton
                text="불러오기"
                color={localStorage.getItem('save') ? 'bg-green-500 hover:bg-lime-500' : 'pointer-events-none'}
                onClick={() => {
                  loadData();
                }}
              />
              <EditorButton
                text="취소하기"
                color="bg-rose-500 hover:bg-red-600"
                onClick={() => {
                  router.push('/');
                }}
              />
              <EditorButton
                text="출간하기"
                color="bg-blue-500 hover:bg-indigo-500"
                onClick={() => {
                  setModalVisible(true);
                }}
              />
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default TuiEditor;
