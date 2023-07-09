import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const HeartIcon = ({ size }: { size?: string }) => {
  return <AiOutlineHeart className={`text-4xl ${size} text-gray-700`} />;
};

export default HeartIcon;
