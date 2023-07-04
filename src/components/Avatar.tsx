import Image from 'next/image';
import React from 'react';

type Props = {
  image?: string | null;
};

const Avatar = ({ image }: Props) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={`ml-8 bg-white rounded-full p-[0.1rem] object-cover w-6 hover:bg-yellow-500`}
      src={image ?? undefined}
      alt="프로필 이미지"
      referrerPolicy="no-referrer"
    />
  );
};

export default Avatar;
