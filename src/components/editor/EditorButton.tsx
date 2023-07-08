import Link from 'next/link';
import { type } from 'os';
import React from 'react';

type Props = {
  text: string;
  color: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: any;
  disabled?: boolean;
};

const EditorButton = ({ text, color, onClick, type = 'button', disabled = false }: Props) => {
  return (
    <button
      type={type}
      className={`${color} ml-2 p-5 pt-3 pb-3 mt-5 rounded-lg text-amber-50 font-semibold transition ease-in-out delay-150 duration-300`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default EditorButton;
