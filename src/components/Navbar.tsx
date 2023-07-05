'use client';

import Link from 'next/link';
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import useSWR from 'swr';
import Button from './ui/Button';
import Avatar from './Avatar';

type Props = {
  name: string;
  href: string;
};

const menu: Props[] = [
  { name: 'Home', href: '/' },
  { name: 'Posts', href: '/posts' },
];

const Navbar = () => {
  const { data, error, isLoading } = useSWR('/api/ownership');
  const ownership = data?.[1];
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <nav>
      <ul className="flex text-base">
        {menu.map((item) => {
          return (
            <li key={item.name} className="text-gray-300 ml-8 hover:text-yellow-500">
              <Link href={item.href}>{item.name}</Link>
            </li>
          );
        })}

        {session ? (
          <>
            {ownership && (
              <li key="Create" className="text-gray-300 ml-8 hover:text-yellow-500">
                <Link href="/editor">Editor</Link>
              </li>
            )}
            <li>
              <Button text="Log Out" onClick={() => signOut()} />
            </li>
          </>
        ) : (
          <li>
            <Button text="Log In" onClick={() => signIn()} />
          </li>
        )}
        {user && (
          <>
            <li>
              <Link href={`/user/${user.id}`}>
                <Avatar image={user.image} />
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
