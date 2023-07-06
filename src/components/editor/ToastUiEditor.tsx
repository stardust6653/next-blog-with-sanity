'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import { HookCallback } from '@toast-ui/editor/types/editor';
import { getThumbnailURL } from '../../util/getThumbnailURL';

type Props = {
  loadedContent: string;
  setContent: (value: string) => void;
};

const ToastUiEditor = ({ setContent, loadedContent }: Props) => {
  const editorRef = useRef<any>(null);
  const [markdown, setMarkdown] = useState<any>('');

  const content = editorRef.current?.getInstance().getMarkdown();

  editorRef.current?.getInstance().removeHook('addImageBlobHook');
  editorRef.current?.getInstance().addHook('addImageBlobHook', async (blob: File, callback: HookCallback) => {
    getThumbnailURL(blob, callback);
    return false;
  });

  useEffect(() => {
    setMarkdown(() => {
      editorRef.current?.getInstance().getMarkdown();
    });
  }, [markdown, setMarkdown, content]);

  return loadedContent === '' ? (
    <>
      <Editor
        onChange={() => {
          setMarkdown(content);
          setContent(content);
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
  ) : (
    <div className="h-[80%]">
      <Editor
        initialValue={loadedContent}
        onChange={() => {
          setMarkdown(content);
          setContent(content);
        }}
        placeholder="글을 적어주세요!"
        previewStyle="vertical"
        height={'100%'}
        initialEditType="markdown"
        useCommandShortcut={false}
        hideModeSwitch={true}
        language="ko-KR"
        ref={editorRef}
      />
    </div>
  );
};

export default ToastUiEditor;
