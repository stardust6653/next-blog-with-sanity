'use client';

import Link from 'next/link';
import React from 'react';
import Navbar from '../../../Navbar';
import DropboxMenu from '../../../DropboxMenu';
import styles from './Header.module.scss';
import Layout from '../Layout';

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
    <div className={styles['header__layout']}>
      <Layout>
        <header className={styles['header']}>
          <h1 className="text-gray-300 text-3xl sm:text-2xl font-bold">
            <Link href="/">
              <span select-none className="text-yellow-500 ">
                Soyeah
              </span>
              Blog
            </Link>
          </h1>
          <Navbar />
          <DropboxMenu />
        </header>
      </Layout>
    </div>
  );
};

export default Header;
