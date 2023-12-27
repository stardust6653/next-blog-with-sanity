import Image from 'next/image';
import React from 'react';
import profile from '../../../../../../public/images/profile-photo.jpg';
import styles from './IntroImage.module.scss';

const IntroImage = () => {
  return <Image src={profile} alt="해바라기 씨를 먹고 있는 햄스터" className={styles['intro-image']} />;
};

export default IntroImage;
