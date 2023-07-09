import React from 'react';
import PostCard from '../components/PostCard';
import profile from '../../public/images/profile-photo.jpg';
import Image from 'next/image';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import NewPostList from '../components/NewPostList';
import PageTitle from '../components/ui/PageTitle';

const Home = async () => {
  return (
    <section className="flex flex-col justify-center items-center mt-8 mb-10 ">
      <div className="flex justify-center md:w-10/12 lg:w-7/12 border-b border-solid border-gray-400">
        <div className="flex flex-col items-center w-80 pb-4 text-center">
          <h1 className="text-3xl mb-4">
            <span className="font-bold text-2xl text-gray-700">Welcome,</span>
            <br />
            <span className=" text-yellow-500 font-bold">Soyeah Blog</span>
          </h1>
          <Image src={profile} alt="해바라기 씨를 먹고 있는 햄스터" className=" w-48 rounded-full" />
          <article className="mt-4 mb-4">
            <div className="flex mb-2">
              <p className="text-2xl font-semibold mb-">Soye Park</p>
              <div className="flex items-center ml-2">
                <a href="https://www.linkedin.com/in/soye-park-30a3ab229/" className="mr-2">
                  <AiOutlineLinkedin className="text-2xl" />
                </a>
                <a href="https://github.com/stardust6653" target="blank">
                  <FiGithub className="text-2xl" />
                </a>
              </div>
            </div>
            <a href="mailto:stardust6653@gmail.com">
              <p className="font-light">stardust6653@gmail.com</p>
            </a>
          </article>
        </div>
      </div>

      <div className="w-[1440px] flex flex-col items-center ml-auto mr-auto">
        <PageTitle text="New Posts" />
        <section className="w-full ml-auto mr-auto">
          <NewPostList />
        </section>
      </div>
    </section>
  );
};

export default Home;
