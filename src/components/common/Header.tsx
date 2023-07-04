'use client';

import Link from 'next/link';
import React from 'react';
import Navbar from '../Navbar';

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
    <header className="bg-gray-800 flex justify-around items-center pl-2 pr-2 pt-5 pb-5">
      <h1 className="text-gray-300 md:text-xl lg:text-2xl font-bold">
        <Link href="/">
          <span className="text-yellow-500">Soyeah</span> Blog
        </Link>
      </h1>
      <Navbar />
    </header>
  );
};

export default Header;
