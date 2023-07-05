import Image from 'next/image';
import React from 'react';

type Props = {
  imgUrl: string;
};

const AddInfoImage = ({ imgUrl }: Props) => {
  return (
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
  );
};

export default AddInfoImage;
