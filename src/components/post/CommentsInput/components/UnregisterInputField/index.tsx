import React, { Dispatch, SetStateAction } from 'react';

import styles from './UnregisterInputField.module.scss';

interface Props {
  setAuthor: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  author: string;
  password: string;
}

const UnregisterInputField = ({ author, password, setAuthor, setPassword }: Props) => {
  return (
    <form className={styles['unregister-input-field__id-info']}>
      <div className={styles['unregister-input-field__id-input-group']}>
        <label className={styles['unregister-input-field__id-input-label']} htmlFor="id-input">
          ID
        </label>
        <input
          value={author}
          minLength={2}
          maxLength={10}
          onChange={(e) => {
            setAuthor(e.currentTarget.value);
          }}
          className={styles['unregister-input-field__password-input-label']}
          id="id-input"
          type="text"
          placeholder="ID"
        />
      </div>
      <div className={styles['unregister-input-field__password-input-group']}>
        <label htmlFor="password-input">Password</label>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
          minLength={2}
          maxLength={10}
          id="password-input"
          type="password"
          placeholder="PASSWORD"
        />
      </div>
    </form>
  );
};

export default UnregisterInputField;
