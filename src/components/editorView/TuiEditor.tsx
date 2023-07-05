'use client';

import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

import React, { useEffect, useRef, useState } from 'react';
import MoreInfo from './MoreInfo';
import TitleInput from '../editor/TitleInput';
import ToastUiEditor from '../editor/ToastUiEditor';
import EditorButton from '../editor/EditorButton';
import useSWR from 'swr';
import { redirect, useRouter } from 'next/navigation';

const TuiEditor = () => {
  const { data, error, isLoading } = useSWR('/api/ownership');
  const ownership = data?.[1];

  const editorRef = useRef<any>(null);
  const [title, setTitle] = useState<string>('');
  const [modalVisiable, setModalVisible] = useState<boolean>(false);
  const [html, setHTML] = useState<string>('');

  const router = useRouter();

  useEffect(() => {
    setHTML(() => editorRef.current?.getInstance().getHTML());
  }, [html]);

  return (
    <>
      {ownership ? (
        <>
          {modalVisiable ? (
            <MoreInfo title={title} html={html} setModalVisible={() => setModalVisible(false)} />
          ) : (
            <form
              className="w-[95%]"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <TitleInput setTitle={setTitle} />
              <ToastUiEditor editorRef={editorRef} setHTML={setHTML} />

              <div className="flex justify-end mr-3">
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
          )}
        </>
      ) : (
        <>{redirect('/')}</>
      )}
    </>
  );
};

export default TuiEditor;
