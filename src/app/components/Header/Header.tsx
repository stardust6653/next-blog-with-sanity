import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <>
      <header>
        <h1>개똥이 기술블로그</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
