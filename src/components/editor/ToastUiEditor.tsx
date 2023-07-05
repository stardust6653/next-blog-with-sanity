'use client';

import React from 'react';
import { Editor } from '@toast-ui/react-editor';
import { HookCallback } from '@toast-ui/editor/types/editor';

type Props = {
  editorRef: any;
  setHTML: (value: string) => void;
};

const ToastUiEditor = ({ editorRef, setHTML }: Props) => {
  const content = editorRef.current?.getInstance().getHTML();

  editorRef.current?.getInstance().removeHook('addImageBlobHook');

  editorRef.current?.getInstance().addHook('addImageBlobHook', async (blob: File, callback: HookCallback) => {
    if (!blob) {
      return;
    }

    const formData = new FormData();
    formData.append('photo', blob);

    fetch('/api/posts/', { method: 'POST', body: formData })
      .then((res) => res.json())
      .then((result) => callback(result.url));

    return false;
  });

  return (
    <>
      <Editor
        onChange={() => {
          setHTML(content);
        }}
        placeholder="글을 적어주세요!"
        previewStyle="vertical"
        height={'80%'}
        initialEditType="markdown"
        useCommandShortcut={false}
        hideModeSwitch={true}
        language="ko-KR"
        ref={editorRef}
      />
    </>
  );
};

export default ToastUiEditor;
