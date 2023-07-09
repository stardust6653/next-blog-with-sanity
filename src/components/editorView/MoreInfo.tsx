import React, { useState } from 'react';
import EditorButton from '../editor/EditorButton';
import { getThumbnailURL } from '../../util/getThumbnailURL';
import AddInfoImage from '../editor/AddInfoImage';
import Thumbnail from '../editor/Thumbnail';
import DeleteButton from '../editor/DeleteButton';
import WriteIntroduction from '../editor/WriteIntroduction';
import { postData } from '@/util/postData';
import { useRouter } from 'next/navigation';

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
  content: string;
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

const MoreInfo = ({ setModalVisible, title, content }: PropsTypes) => {
  const router = useRouter();

  const [imgUrl, setImgUrl] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');
  const [save, setSave] = useState<boolean>(false);

  const dataObj = {
    imgUrl,
    title,
    content,
    description,
  };

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
        <EditorButton
          text={save ? '저장완료' : '임시저장'}
          color={save ? `bg-gray-400` : `bg-green-500 hover:bg-lime-500`}
          onClick={() => {
            setSave(true);
            localStorage.setItem('save', JSON.stringify(dataObj));
          }}
          disabled={save}
        />
        <EditorButton text="취소하기" color="bg-rose-500 hover:bg-red-600" onClick={setModalVisible} />
        <EditorButton
          text="배포하기"
          color="bg-blue-500 hover:bg-indigo-500"
          onClick={() => {
            postData(dataObj);
            router.push('/posts');
          }}
        />
      </div>
    </div>
  );
};

export default MoreInfo;
