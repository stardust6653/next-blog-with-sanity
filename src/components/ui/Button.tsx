import React from 'react';

type Props = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: Props) => {
  return (
    <button onClick={onClick} className="text-gray-300 ml-8 hover:text-yellow-500">
      {text}
    </button>
  );
};

export default Button;
