import React from 'react';

import styles from './RegisterField.module.scss';
import { User } from '../../../../../../types/types';

interface Props {
  user: User;
}

const RegisterField = ({ user }: Props) => {
  return (
    <div className={styles['register-field']}>
      <div
        className={styles['register-field__user-image']}
        style={{ background: `url(${user.image}) center center`, backgroundSize: 'cover' }}
      />
      <div className={styles['register-field__user-name']}>{user.username}</div>
      <div className={styles['register-field__user-email']}>{user.email}</div>
    </div>
  );
};

export default RegisterField;
