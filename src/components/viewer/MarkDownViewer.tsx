'use client';

import React from 'react';

import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

interface ValueProps {
  html: string;
}

const MarkDownViewer = ({ html }: ValueProps) => {
  return <Viewer initialValue={html} />;
};

export default MarkDownViewer;
