import React, { Dispatch, SetStateAction } from 'react';
import { BsPlusSquare } from 'react-icons/bs';

type Props = {
  setVisible: (visible: boolean) => void;
  getThumbnailURL: (blob: File, callback: (url: string) => void) => Promise<void>;
  setImgUrl: Dispatch<SetStateAction<string>>;
};

const Thumbnail = ({ setVisible, getThumbnailURL, setImgUrl }: Props) => {
  return (
    <>
      <input
        type="file"
        className="hidden"
        id="imgUpload"
        accept="image/*"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          if (event.currentTarget.files !== null) {
            const blob: File = event.currentTarget.files[0];
            setVisible(true);
            getThumbnailURL(blob, setImgUrl);
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
  );
};

export default Thumbnail;
