import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  setVisible: (visible: boolean) => void;
  setImgUrl: Dispatch<SetStateAction<string>>;
};

const DeleteButton = ({ setImgUrl, setVisible }: Props) => {
  return (
    <button
      onClick={() => {
        setImgUrl('');
        setVisible(false);
      }}
      className="mt-3 ml-2 text-slate-400 hover:text-slate-800"
    >
      제거
    </button>
  );
};

export default DeleteButton;
