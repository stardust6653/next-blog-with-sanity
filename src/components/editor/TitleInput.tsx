import React from 'react';

type Props = {
  loadedTitle: string;
  setTitle: (value: string) => void;
};

const TitleInput = ({ setTitle, loadedTitle }: Props) => {
  return (
    <input
      defaultValue={loadedTitle}
      placeholder="제목을 입력해주세요."
      className="text-4xl mb-5 outline-none pl-5 pr-5 w-full"
      onChange={(event) => {
        setTitle(event.target.value);
      }}
      required
    />
  );
};

export default TitleInput;
