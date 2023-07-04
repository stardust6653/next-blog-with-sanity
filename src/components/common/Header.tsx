'use client';

import Link from 'next/link';
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Button from '../ui/Button';

type Props = {
  name: string;
  href: string;
};

const menu: Props[] = [
  { name: 'Home', href: '/' },
  { name: 'Posts', href: '/posts' },
];

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-gray-800 flex justify-around items-center pl-2 pr-2 pt-5 pb-5">
      <h1 className="text-gray-300 md:text-xl lg:text-2xl font-bold">
        <Link href="/">
          <span className=" text-yellow-500">Soyeah</span> Blog
        </Link>
      </h1>
      <nav>
        <ul className="flex ">
          {menu.map((item) => {
            return (
              <li key={item.name} className="text-gray-300 ml-8 hover:text-yellow-500">
                <Link href={item.href}>{item.name}</Link>
              </li>
            );
          })}
          {session ? (
            <>
              <li key="Create" className="text-gray-300 ml-8 hover:text-yellow-500">
                <Link href="/create">Create</Link>
              </li>
              <Button text="Log Out" onClick={() => signOut()} />
            </>
          ) : (
            <Button text="Log In" onClick={() => signIn()} />
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
