'use client';

import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import Navbar from './Navbar';
import Avatar from './Avatar';
import { useMe } from '@/hooks/bookmarks';
import Link from 'next/link';
import Button from './ui/Button';
import { signIn, signOut } from 'next-auth/react';
import DropboxModal from './DropboxModal';

const DropboxMenu = () => {
  const [modal, setModal] = useState(false);

  type Props = {
    name: string;
    href: string;
  };

  const menu: Props[] = [
    { name: 'Home', href: '/' },
    { name: 'Posts', href: '/posts' },
  ];

  return (
    <div className="sm:hidden text-white text-3xl">
      <GiHamburgerMenu
        onClick={() => {
          setModal((prev) => !prev);
        }}
      />
      {modal && <DropboxModal setModal={setModal} modal={modal} />}
    </div>
  );
};

export default DropboxMenu;
