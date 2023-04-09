import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 flex justify-between items-center pl-9 pr-9 pt-5 pb-5">
      <h1 className="text-gray-300 text-2xl">Soyeah Blog</h1>
      <nav>
        <ul className="flex">
          <li className="text-gray-300 ml-5">
            <Link href="/">Home</Link>
          </li>
          <li className="text-gray-300 ml-5">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="text-gray-300 ml-5">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
