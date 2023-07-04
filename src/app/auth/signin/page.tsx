import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import SignIn from '@/components/Signin';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';

const SignPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (session) {
    redirect('/');
  }

  const providers = (await getProviders()) ?? {};

  return (
    <div className="h-[100vh]">
      <SignIn providers={providers} />
    </div>
  );
};

export default SignPage;
