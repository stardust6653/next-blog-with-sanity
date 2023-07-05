import React, { useEffect, useState } from 'react';
import { BsPlusSquare } from 'react-icons/bs';
import EditorButton from '../editor/EditorButton';
import { getThumbnailURL } from '@/util/getThumbnailURL';
import AddInfoImage from '../editor/AddInfoImage';
import Thumbnail from '../editor/Thumbnail';
import DeleteButton from '../editor/DeleteButton';
import WriteIntroduction from '../editor/WriteIntroduction';

export interface FileTypes {
  name: string;
  lastModified: number;
  lastModifiedDate?: string[];
  size: number;
  type: string;
  webkitRelativePath: string;
}

interface PropsTypes {
  title: string;
  html: string;
  setModalVisible: () => void;
}

interface DataProps {
  id: number;
  title: string;
  html: string;
  date: string;
  previewImg: string;
  description: string;
}

const MoreInfo = ({ title, html, setModalVisible }: PropsTypes) => {
  const [imgUrl, setImgUrl] = useState('');
  const [visible, setVisible] = useState(false);
  const [description, setDescription] = useState('');

  return (
    <div className="flex justify-center items-center flex-col h-screen pb-32">
      <div className="flex">
        <div>
          {visible ? (
            <AddInfoImage imgUrl={imgUrl} />
          ) : (
            <Thumbnail setVisible={setVisible} getThumbnailURL={getThumbnailURL} setImgUrl={setImgUrl} />
          )}
          <DeleteButton setImgUrl={setImgUrl} setVisible={setVisible} />
        </div>
        <WriteIntroduction setDescription={setDescription} />
      </div>
      <div className="flex justify-end mr-3 w-full">
        <EditorButton text="취소하기" color="bg-rose-500 hover:bg-red-600" onClick={setModalVisible} />
        <EditorButton text="배포하기" type="submit" color="bg-blue-500 hover:bg-indigo-500" />
      </div>
    </div>
  );
};

export default MoreInfo;
