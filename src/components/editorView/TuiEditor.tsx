'use client';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

import { Editor } from '@toast-ui/react-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import codeSyntaxHighlightPlugin from '@toast-ui/editor-plugin-code-syntax-highlight';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import MoreInfo from './MoreInfo';

const TuiEditor = () => {
  const viewHeight = Number(window.outerHeight - 450) + 'px';
  const editorRef = useRef<any>(null);
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [html, setHTML] = useState('');
  const [visiable, setVisible] = useState(false);

  const toolbarItems = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr'],
    ['ul', 'ol', 'task'],
    ['table', 'link'],
    ['image'],
    ['code'],
    ['scrollSync'],
  ];

  useEffect(() => {
    setHTML(() => editorRef.current.getInstance().getHTML());
  }, [html]);

  return (
    <>
      {visiable ? (
        <MoreInfo title={title} html={html} />
      ) : (
        <form
          className="w-3/5"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            placeholder="제목을 입력해주세요."
            className="text-4xl mb-5 outline-none pl-5 pr-5 w-full"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            required
          />
          <Editor
            onChange={() => {
              setHTML(editorRef.current.getInstance().getHTML());
              console.log(html);
            }}
            initialValue="글을 적어주세요!"
            previewStyle="vertical"
            height={viewHeight}
            initialEditType="markdown"
            useCommandShortcut={false}
            plugins={[colorSyntax, codeSyntaxHighlightPlugin]}
            language="ko-KR"
            toolbarItems={toolbarItems}
            ref={editorRef}
          />
          <div className="flex justify-end mr-3">
            <button className="p-5 pt-3 pb-3 mt-5 mr-2 rounded-lg text-amber-50 font-semibold transition ease-in-out delay-150 bg-rose-500  hover:bg-red-600 duration-300">
              <Link href="/posts">취소하기</Link>
            </button>
            <button
              type="submit"
              className="p-5 pt-3 pb-3 mt-5 rounded-lg text-amber-50 font-semibold transition ease-in-out delay-150 bg-blue-500  hover:bg-indigo-500 duration-300"
              onClick={() => {
                setVisible(true);
              }}
            >
              출간하기
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default TuiEditor;
