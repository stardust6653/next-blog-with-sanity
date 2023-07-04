import React from 'react';
import GoogleIcon from './icons/GoogleIcon';
import GithubIcon from './icons/GithubIcon';
import KakaoIcon from './icons/KakaoIcon';

type Props = {
  text: string;
  onClick: () => void;
};

const Icon = (text: string): JSX.Element | undefined => {
  if (text == 'Sign in with Google') {
    return <GoogleIcon />;
  } else if (text == 'Sign in with GitHub') {
    return <GithubIcon />;
  } else if (text == 'Sign in with Kakao') {
    return <KakaoIcon />;
  }
};

const SignInButton = ({ text, onClick }: Props) => {
  return (
    <div className="p-2">
      <button
        className="rounded-md w-64 border-2 text-gray-800 border-gray-800 p-4 flex items-center justify-center hover:bg-slate-200 [&>div>span]:hover:text-yellow-600"
        onClick={onClick}
      >
        <div className="w-[80%] flex justify-start">
          <span className="mr-2 text-lg">{Icon(text)}</span>
          <p className="font-semibold">{text}</p>
        </div>
      </button>
    </div>
  );
};

export default SignInButton;
