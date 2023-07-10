import React, { FormEvent } from 'react';

type Props = {
  onSubmit: (e: FormEvent) => void;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  keyword: string;
};

const SearchBar = ({ onSubmit, setKeyword, keyword }: Props) => {
  return (
    <>
      <form onSubmit={onSubmit} className="pr-[30px] flex justify-end">
        <input
          type="text"
          className="w-[480px] h-8 p-5 outline-none rounded-lg  border border-gray-400 focus:border-gray-900"
          autoFocus
          placeholder="제목을 입력해주세요!"
          value={keyword}
          onChange={(e) => {
            console.log(e.target.value);
            setKeyword(e.target.value);
          }}
        />
      </form>
    </>
  );
};

export default SearchBar;
