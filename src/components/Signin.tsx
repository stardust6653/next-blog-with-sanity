'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';
import React from 'react';
import SignInButton from './ui/SignInButton';

type Props = {
  providers: Record<string, ClientSafeProvider>;
};

const SignIn = ({ providers }: Props) => {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <SignInButton key={id} text={`Sign in with ${name}`} onClick={() => signIn(id)}></SignInButton>
      ))}
    </>
  );
};

export default SignIn;
