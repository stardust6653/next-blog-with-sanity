import { useMe } from '@/hooks/bookmarks';
import React, { useState } from 'react';
import Avatar from './Avatar';
import Link from 'next/link';
import Button from './ui/Button';
import { signIn, signOut } from 'next-auth/react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const DropboxModal = ({ setModal, modal }: any) => {
  const { user } = useMe();
  const ownership = user?.owner;

  type Props = {
    name: string;
    href: string;
  };

  const menu: Props[] = [
    { name: 'Home', href: '/' },
    { name: 'Posts', href: '/posts' },
  ];

  return (
    <>
      {user ? (
        <div className="fixed z-10 top-0 right-0 bg-gray-700 h-[100vh] w-[100%]">
          <div className="flex px-8 py-7 items-center justify-between">
            <div className="flex items-center">
              <Avatar size="w-6 xs:w-8" marginRight="mr-2 xs:mr-3" image={user.image} />
              <p className="text-base xs:text-xl font-medium">반갑습니다. {user.name}님</p>
            </div>
            <AiOutlineClose className="hover:text-yellow-500" onClick={() => setModal(false)} />
          </div>
          <nav className="">
            <ul className="text-2xl">
              {menu.map((item) => {
                return (
                  <li key={item.name} className="text-gray-300 ml-8 hover:text-yellow-500 mb-2">
                    <Link
                      onClick={() => {
                        setModal(false);
                      }}
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}

              {user ? (
                <>
                  {ownership && (
                    <li key="Create" className="text-gray-300 ml-8 hover:text-yellow-500 mb-2">
                      <Link onClick={() => setModal(false)} href="/editor">
                        Editor
                      </Link>
                    </li>
                  )}
                  <li key="Bookmarks" className="text-gray-300 ml-8 hover:text-yellow-500 mb-2">
                    <Link onClick={() => setModal(false)} href={`/bookmarks/${user.id}`}>
                      Bookmarks
                    </Link>
                  </li>
                  <li>
                    <Button
                      text="Log Out"
                      onClick={() => {
                        signOut();
                        setModal(false);
                      }}
                    />
                  </li>
                </>
              ) : (
                <li>
                  <Button
                    text="Log In"
                    onClick={() => {
                      signOut();
                      setModal(false);
                    }}
                  />
                </li>
              )}
            </ul>
          </nav>
        </div>
      ) : (
        <div className="fixed z-10 top-0 right-0 bg-gray-700 h-[100vh] w-[100%]">
          <div className="flex px-8 py-7 items-center justify-between">
            <div
              onClick={() => {
                signIn();
              }}
            >
              로그인을 해주세요.
            </div>
            <AiOutlineClose
              className="cursor-pointer hover:text-yellow-500"
              onClick={() => {
                setModal(false);
              }}
            />
          </div>
          <nav className="">
            <ul className="text-2xl">
              {menu.map((item) => {
                return (
                  <li key={item.name} className="text-gray-300 ml-8 hover:text-yellow-500 mb-2">
                    <Link
                      onClick={() => {
                        setModal(false);
                      }}
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}

              <li>
                <Button
                  text="Log In"
                  onClick={() => {
                    signIn();
                    setModal(false);
                  }}
                />
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default DropboxModal;
