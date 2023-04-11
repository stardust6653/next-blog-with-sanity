import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsPlusSquare } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import { deleteObject, getDownloadURL, getStorage, uploadBytes } from 'firebase/storage';
import { storage } from '../../firebase';
import { ref as sRef } from 'firebase/storage';
import Image from 'next/image';
import { postData } from '@/controller/CRUD';

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
}

interface DataProps {
  id: number;
  title: string;
  html: string;
  date: string;
  previewImg: string;
  description: string;
}

const MoreInfo = ({ title, html }: PropsTypes) => {
  const router = useRouter();
  const [imgUpload, setImgUpload] = useState<FileTypes | null>(null);
  const [imgUrl, setImgUrl] = useState('');
  const [visible, setVisible] = useState(false);
  const [description, setDescription] = useState('');

  const date = new Date();

  const postDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  const data: DataProps = {
    id: Date.now(),
    title,
    html,
    date: postDate,
    previewImg: imgUrl,
    description,
  };

  const previewImgUpload = () => {
    if (imgUpload === null) return;

    const id = Date.now();
    const imageRef = sRef(storage, `images/${id}`);

    uploadBytes(imageRef, imgUpload as File).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImgUrl(url);
      });
    });
  };

  const deleteImg = (event: React.MouseEvent<HTMLElement>) => {
    const deleteRef = sRef(storage, imgUrl);
    deleteObject(deleteRef);
    setImgUrl('');
    setVisible(false);
  };

  useEffect(previewImgUpload, [imgUpload]);

  return (
    <div className="flex justify-center items-center flex-col h-screen pb-32">
      <div className="flex">
        <div>
          {visible ? (
            <>
              <Image
                src={imgUrl}
                alt="썸네일"
                width={320}
                height={208}
                style={{ objectFit: 'cover' }}
                className="shadow-md rounded-xl overflow-hidden bg-no-repeat bg-cover h-52 bg-center"
              />
            </>
          ) : (
            <>
              <input
                type="file"
                className="hidden"
                id="imgUpload"
                accept="image/*"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (event.currentTarget.files !== null) {
                    setImgUpload(event.currentTarget.files[0]);
                    setVisible(true);
                  }
                }}
              />

              <label
                htmlFor="imgUpload"
                className="flex justify-center items-center w-80 h-52 bg-blue-50 shadow-md rounded-xl "
              >
                <BsPlusSquare className="text-6xl font-thin text-slate-900" />
              </label>
            </>
          )}

          <button className="mt-3 ml-2 text-slate-400 hover:text-slate-800" onClick={deleteImg}>
            제거
          </button>
        </div>
        <textarea
          className="w-80 h-52 resize-none ml-4 shadow-md rounded-xl outline-none p-8 text-xl"
          placeholder="요약 소개글을 적어보세요! (80자 이내)"
          maxLength={80}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
      </div>
      <div className="flex justify-end mr-3 w-full">
        <button
          className="p-5 pt-3 pb-3 mt-5 mr-2 rounded-lg text-amber-50 font-semibold transition ease-in-out delay-150 bg-rose-500  hover:bg-red-600 duration-300"
          onClick={() => router.back()}
        >
          취소하기
        </button>
        <button
          type="submit"
          className="p-5 pt-3 pb-3 mt-5 rounded-lg text-amber-50 font-semibold transition ease-in-out delay-150 bg-blue-500  hover:bg-indigo-500 duration-300"
          onClick={() => {
            console.log(data);
            postData(data);
          }}
        >
          배포하기
        </button>
      </div>
    </div>
  );
};

export default MoreInfo;
