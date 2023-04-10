import Image from 'next/image';
import React from 'react';

const PostCard = () => {
  return (
    <div className="w-80 m-3 mt-10 hover:-translate-y-1 hover:shadow-md hover:duration-300">
      <Image
        src="https://velog.velcdn.com/images/stardust6653/post/a91bdfc3-ebbe-45b1-bc6d-94b59e691006/image.jpg"
        alt=""
        width="330"
        height="210"
      />
      <div className="pl-3 pr-3 pb-3">
        <p className="text-xl font-extrabold mt-4">업그레이드 커밋!</p>
        <p className="text-base mt-2">
          약 3-4달 전부터 네이밍부터 기획과 디자인을 하며 준비하던 사이드 프로젝트가 어느덧 마크업을 진행하는 단계에...
        </p>
        <span className="bg-blue-400 text-neutral-100 p-4 pt-2 pb-2 mt-3 mr-3 rounded-2xl inline-block leading-4">
          git
        </span>
        <span className="bg-blue-400 text-neutral-100 p-4 pt-2 pb-2 mt-3 mr-3 rounded-2xl inline-block leading-4">
          message
        </span>
        <p className="font-light text-sm mt-2">2022년 11월 2일</p>
      </div>
    </div>
  );
};

export default PostCard;
