'use client';

import Link from 'next/link';
import React from 'react';
import Navbar from '../Navbar';
import DropboxMenu from '../DropboxMenu';

type Props = {
  name: string;
  href: string;
};

const menu: Props[] = [
  { name: 'Home', href: '/' },
  { name: 'Posts', href: '/posts' },
];

const Header = () => {
  return (
    <header className="relative bg-gray-800 flex justify-between items-center px-6 py-5 sm:justify-around sm:px-2">
      <h1 className="text-gray-300 text-3xl sm:text-2xl font-bold">
        <Link href="/">
          <span className="text-yellow-500">Soyeah</span> Blog
        </Link>
      </h1>
      <Navbar />
      <DropboxMenu />
    </header>
  );
};

export default Header;
