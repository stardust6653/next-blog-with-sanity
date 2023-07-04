import React from 'react';

type Props = {
  text: string;
  onClick: () => void;
};

const SignInButton = ({ text, onClick }: Props) => {
  return <button onClick={onClick}>{text}</button>;
};

export default SignInButton;
