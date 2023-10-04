'use client';

import Link from 'next/link';
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import useSWR from 'swr';
import Button from './ui/Button';
import Avatar from './Avatar';
import { useMe } from '../hooks/bookmarks';

type Props = {
  name: string;
  href: string;
};

const menu: Props[] = [
  { name: 'Home', href: '/' },
  { name: 'Posts', href: '/posts' },
];

const Navbar = () => {
  const { user } = useMe();
  const ownership = user?.owner;

  return (
    <nav className="hidden sm:flex">
      <ul className="flex text-base">
        {menu.map((item) => {
          return (
            <li key={item.name} className="text-gray-300 ml-8 hover:text-yellow-500">
              <Link href={item.href}>{item.name}</Link>
            </li>
          );
        })}

        {user ? (
          <>
            {ownership && (
              <li key="Create" className="text-gray-300 ml-8 hover:text-yellow-500">
                <Link href="/editor">Editor</Link>
              </li>
            )}
            <li key="Bookmarks" className="text-gray-300 ml-8 hover:text-yellow-500">
              <Link href={`/bookmarks/${user.id}`}>Bookmarks</Link>
            </li>
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
              {/* <Link href={`/user/${user.id}`}> */}
              <Avatar image={user.image} />
              {/* </Link> */}
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
