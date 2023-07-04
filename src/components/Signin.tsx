'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';
import React from 'react';
import SignInButton from './ui/SignInButton';

type Props = {
  providers: Record<string, ClientSafeProvider>;
};

const SignIn = ({ providers }: Props) => {
  return (
    <div className="flex flex-col items-center mt-40">
      <h2 className=" text-2xl mb-3">간편 회원가입</h2>
      {Object.values(providers).map(({ name, id }) => (
        <SignInButton key={id} text={`Sign in with ${name}`} onClick={() => signIn(id)}></SignInButton>
      ))}
    </div>
  );
};

export default SignIn;
