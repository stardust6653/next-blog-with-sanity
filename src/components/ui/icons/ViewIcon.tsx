import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';

const ViewIcon = ({ size }: { size?: string }) => {
  return <AiOutlineEye className={size} />;
};

export default ViewIcon;
