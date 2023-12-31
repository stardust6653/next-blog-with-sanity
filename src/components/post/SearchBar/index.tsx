import React, { FormEvent } from 'react';

import styles from './SearchBar.module.scss';

type Props = {
  onSubmit: (e: FormEvent) => void;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  keyword: string;
};

const SearchBar = ({ onSubmit, setKeyword, keyword }: Props) => {
  return (
    <>
      <form className={styles['search-bar']} onSubmit={onSubmit}>
        <input
          type="text"
          className={styles['search-bar__input']}
          autoFocus
          placeholder="제목을 입력해주세요!"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
      </form>
    </>
  );
};

export default SearchBar;
