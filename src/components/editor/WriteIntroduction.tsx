import React from 'react';

type Props = {
  setDescription: (value: string) => void;
};

const WriteIntroduction = ({ setDescription }: Props) => {
  return (
    <textarea
      className="w-80 h-52 resize-none ml-4 shadow-md rounded-xl outline-none p-8 text-xl"
      placeholder="요약 소개글을 적어보세요! (80자 이내)"
      maxLength={80}
      onChange={(event) => {
        setDescription(event.target.value);
      }}
    />
  );
};

export default WriteIntroduction;
